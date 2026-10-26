const {createPublicKey, verify} = require("node:crypto");

const json = (statusCode, body) => ({
  statusCode,
  headers: {"Content-Type": "application/json", "Cache-Control": "no-store"},
  body: JSON.stringify(body)
});
const reply = (content, ephemeral = false) => json(200, {
  type: 4,
  data: {content, allowed_mentions: {parse: []}, ...(ephemeral ? {flags: 64} : {})}
});

exports.handler = async event => {
  if (event.httpMethod !== "POST") return {...json(405, {error: "POST required"}), headers: {Allow: "POST"}};
  const publicKey = process.env.DISCORD_PUBLIC_KEY;
  if (!/^[a-f0-9]{64}$/i.test(publicKey || "")) return json(503, {error: "Discord public key is not configured"});

  const headers = Object.fromEntries(Object.entries(event.headers || {}).map(([key, value]) => [key.toLowerCase(), value]));
  const signature = headers["x-signature-ed25519"] || "";
  const timestamp = headers["x-signature-timestamp"] || "";
  const body = Buffer.from(event.body || "", event.isBase64Encoded ? "base64" : "utf8");
  if (body.length > 65536) return json(413, {error: "Request too large"});
  if (!/^[a-f0-9]{128}$/i.test(signature) || !/^\d{1,12}$/.test(timestamp) ||
      Math.abs(Date.now() / 1000 - Number(timestamp)) > 300) {
    return json(401, {error: "Invalid request signature"});
  }
  const key = createPublicKey({
    key: Buffer.from("302a300506032b6570032100" + publicKey, "hex"),
    format: "der",
    type: "spki"
  });
  if (!verify(null, Buffer.concat([Buffer.from(timestamp), body]), key, Buffer.from(signature, "hex"))) {
    return json(401, {error: "Invalid request signature"});
  }

  let interaction;
  try {
    interaction = JSON.parse(body.toString("utf8"));
  } catch {
    return json(400, {error: "Invalid JSON"});
  }
  if (interaction?.type === 1) return json(200, {type: 1});
  if (interaction?.type !== 2 || interaction.data?.name !== "armoria" || interaction.data?.type !== 1) {
    return reply("Unknown command.", true);
  }
  const options = interaction.data.options;
  const seed = Array.isArray(options) ? options.find(option => option?.name === "seed" && option.type === 3)?.value : undefined;
  if (typeof seed !== "string" || seed.length < 1 || seed.length > 100 || /[\s\x00-\x1f]/u.test(seed)) {
    return reply("Please supply a seed of 1–100 characters without spaces.", true);
  }
  try {
    const url = process.env.ARMORIA_API_URL
      ? new URL(process.env.ARMORIA_API_URL)
      : new URL("/api", process.env.URL);
    if (url.protocol !== "https:" || url.username || url.password) throw new Error("Invalid API URL");
    url.search = "";
    url.hash = "";
    url.searchParams.set("format", "png");
    url.searchParams.set("size", "400");
    url.searchParams.set("seed", seed);
    return reply(url.href);
  } catch {
    return reply("The image API URL has not been configured yet.", true);
  }
};
