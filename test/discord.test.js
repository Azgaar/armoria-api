const {test} = require("node:test");
const assert = require("node:assert/strict");
const {generateKeyPairSync, sign} = require("node:crypto");
const {handler} = require("../netlify/functions/discord");
const {publicKey, privateKey} = generateKeyPairSync("ed25519");
process.env.DISCORD_PUBLIC_KEY = publicKey.export({format: "der", type: "spki"}).subarray(-32).toString("hex");
process.env.ARMORIA_API_URL = "https://armoria-test.netlify.app/api";
const command = seed => ({type: 2, data: {name: "armoria", type: 1, options: [{name: "seed", type: 3, value: seed}]}});

function event(payload, {base64 = false, timestamp = String(Math.floor(Date.now() / 1000))} = {}) {
  const body = typeof payload === "string" ? payload : JSON.stringify(payload);
  return {
    httpMethod: "POST", isBase64Encoded: base64,
    headers: {
      "X-Signature-Timestamp": timestamp,
      "X-Signature-Ed25519": sign(null, Buffer.from(timestamp + body), privateKey).toString("hex")
    },
    body: base64 ? Buffer.from(body).toString("base64") : body
  };
}

test("Discord endpoint verifies signed PINGs, including Netlify base64 bodies", async () => {
  for (const base64 of [false, true]) {
    const result = await handler(event({type: 1}, {base64}));
    assert.equal(result.statusCode, 200);
    assert.deepEqual(JSON.parse(result.body), {type: 1});
  }
});

test("unsigned, forged, tampered and expired requests are rejected", async () => {
  const tampered = event({type: 1});
  tampered.body = JSON.stringify(command("tampered"));
  const forged = event({type: 1});
  forged.headers["X-Signature-Ed25519"] = "00".repeat(64);
  for (const input of [
    {httpMethod: "POST", body: '{"type":1}', headers: {}}, tampered, forged,
    event({type: 1}, {timestamp: "1"})
  ]) assert.equal((await handler(input)).statusCode, 401);
});

test("slash command replies immediately with an encoded local API URL", async t => {
  t.mock.method(globalThis, "fetch", () => {throw new Error("Must not wait for the image API");});
  const seed = 'é&format=svg#<>"';
  const result = await handler(event(command(seed)));
  const reply = JSON.parse(result.body);
  assert.equal(reply.type, 4);
  const url = new URL(reply.data.content);
  assert.equal(url.origin, "https://armoria-test.netlify.app");
  assert.equal(url.pathname, "/api");
  assert.equal(url.searchParams.get("seed"), seed);
  assert.equal(url.searchParams.get("format"), "png");
  assert.equal(url.searchParams.get("size"), "400");
  assert.deepEqual(reply.data.allowed_mentions, {parse: []});
  assert.equal(reply.data.flags, undefined);
});

test("missing or invalid seeds produce private usage errors", async () => {
  for (const seed of [undefined, "", "two words", "a".repeat(101), 123, "a\u0000b"]) {
    const result = await handler(event(command(seed)));
    const reply = JSON.parse(result.body);
    assert.equal(reply.data.flags, 64);
    assert.match(reply.data.content, /seed/);
  }
});

test("malformed signed JSON and unsupported methods are handled", async () => {
  assert.equal((await handler(event("{"))).statusCode, 400);
  assert.equal((await handler({httpMethod: "GET"})).statusCode, 405);
  assert.equal(JSON.parse((await handler(event(null))).body).data.flags, 64);
});

test("registration upserts only armoria, with the requested scope", async () => {
  const {register} = await import("../scripts/register-discord.mjs");
  for (const guildId of [undefined, "456"]) {
    await register({DISCORD_APPLICATION_ID: "123", DISCORD_BOT_TOKEN: "test", DISCORD_GUILD_ID: guildId}, async (url, options) => {
      assert.equal(url, `https://discord.com/api/v10/applications/123${guildId ? "/guilds/456" : ""}/commands`);
      assert.equal(options.method, "POST");
      assert.equal(JSON.parse(options.body).name, "armoria");
      return {ok: true, json: async () => ({id: "789"})};
    });
  }
  await assert.rejects(register({}, () => {throw new Error("Must not call Discord");}), /Set DISCORD_APPLICATION_ID/);
});
