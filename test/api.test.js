const {test} = require("node:test");
const assert = require("node:assert/strict");

delete process.env.MONGODB_URI;
delete process.env.MONGO_ID;
delete process.env.MONGO_PASS;
const {handler} = require("../netlify/functions/api");

async function request(path, query = {}) {
  const queryString = new URLSearchParams(query).toString();
  const result = await handler({
    httpMethod: "GET", path, headers: {}, body: null,
    queryStringParameters: query, multiValueQueryStringParameters: Object.fromEntries(
      Object.entries(query).map(([key, value]) => [key, [value]])
    ), rawUrl: `https://example.netlify.app${path}?${queryString}`
  }, {});
  return {...result, bytes: Buffer.from(result.body, result.isBase64Encoded ? "base64" : "utf8")};
}

test("Netlify returns real PNG bytes at the requested size, with no database", async () => {
  const result = await request("/api", {format: "png", size: "400", seed: "barrulus"});
  assert.equal(result.statusCode, 200);
  assert.match(result.headers["content-type"], /image\/png/);
  assert.equal(result.isBase64Encoded, true);
  assert.equal(result.bytes.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
  assert.equal(result.bytes.readUInt32BE(16), 400);
  assert.equal(result.bytes.readUInt32BE(20), 400);
});

test("seeded images are stable across warm and concurrent requests", async () => {
  const query = {format: "png", size: "80", seed: "test"};
  const original = Math.random;
  const first = await request("/api", query);
  const [other, repeated] = await Promise.all([
    request("/api", {...query, seed: "different"}), request("/api", query)
  ]);
  assert.equal(first.statusCode, 200);
  assert.equal(other.statusCode, 200);
  assert.notDeepEqual(first.bytes, other.bytes);
  assert.deepEqual(first.bytes, repeated.bytes);
  assert.equal(Math.random, original);
});

test("legacy paths and internal function paths resolve charges independently of cwd", async () => {
  const cwd = process.cwd();
  try {
    process.chdir("/tmp");
    for (const path of ["/svg/80px/barrulus", "/.netlify/functions/api/svg/80/barrulus", "/api/svg/80/barrulus"]) {
      const result = await request(path);
      assert.equal(result.statusCode, 200, path);
      assert.match(result.bytes.toString(), /<svg/);
      assert.doesNotMatch(result.bytes.toString(), /undefined/);
    }
  } finally {
    process.chdir(cwd);
  }
});

test("custom COA and colours do not alter the defaults on subsequent requests", async () => {
  const query = {coa: JSON.stringify({t1: "gules", shield: "heater"}), seed: "fixed", size: "80"};
  const before = await request("/api", query);
  const recoloured = await request("/api", {...query, gules: "abcdef"});
  const after = await request("/api", query);
  assert.equal(before.statusCode, 200);
  assert.match(recoloured.body, /#abcdef/);
  assert.notEqual(before.body, recoloured.body);
  assert.equal(before.body, after.body);
});

test("encoded punctuation and Unicode seeds produce valid PNGs", async () => {
  const result = await request("/api", {seed: 'é&format=svg#<>"', format: "png", size: "80"});
  assert.equal(result.statusCode, 200);
  assert.equal(result.bytes.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
});

test("invalid render parameters fail promptly instead of rejecting outside Express", async () => {
  for (const query of [
    {size: "999999"}, {size: "-1"}, {size: "400junk"}, {format: "jpeg"},
    {shield: "missing"}, {coa: "{"}, {coa: "null"},
    {coa: JSON.stringify({t1: '<script>alert(1)</script>'})},
    {coa: JSON.stringify({t1: "or", charges: [{charge: "../../README", t: "gules", p: "e"}]})}
  ]) {
    const result = await request("/api", query);
    assert.equal(result.statusCode, 400, JSON.stringify(query));
  }
  assert.equal((await request("/png/999999/test")).statusCode, 400);
});

test("unseeded requests are not cached and have independent seeds", async () => {
  const first = await request("/api", {size: "80"});
  const second = await request("/api", {size: "80"});
  assert.equal(first.headers["cache-control"], "no-store");
  assert.notEqual(first.body, second.body);
});

test("password-protected claims cannot be changed without a key when no master key is set", async () => {
  const app = require("../server");
  const previousMasterKey = process.env.MASTER_KEY;
  delete process.env.MASTER_KEY;
  let mutations = 0;
  app.locals.collection = {
    findOne: async () => ({name: "protected", key: "secret", coa: {t1: "or"}}),
    updateOne: async () => {mutations++;},
    deleteOne: async () => {mutations++;}
  };
  try {
    const coa = encodeURIComponent(JSON.stringify({t1: "gules"}));
    for (const path of [`/claim/protected/${coa}`, "/unclaim/protected"]) {
      assert.equal((await request(path)).statusCode, 403);
      assert.equal((await request(path + "/wrong")).statusCode, 403);
    }
    assert.equal(mutations, 0);
    assert.equal((await request(`/claim/protected/${coa}/secret`, {size: "80"})).statusCode, 200);
    assert.equal((await request("/unclaim/protected/secret")).statusCode, 200);
    assert.equal(mutations, 2);
  } finally {
    delete app.locals.collection;
    if (previousMasterKey === undefined) delete process.env.MASTER_KEY;
    else process.env.MASTER_KEY = previousMasterKey;
  }
});
