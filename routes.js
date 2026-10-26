const express = require("express");
const router = express.Router();
const render = require("./app/renderer");
const {Resvg} = require("@resvg/resvg-js");
const {createHash, randomInt} = require("node:crypto");
const {shieldPaths} = require("./app/templates");

const SIZE_DEFAULT = 1200;
const FORMAT_DEFAULT = "svg";
const SHIELD_DEFAULT = "heater";
const get = (path, handler) => router.get(path, (req, res, next) =>
  Promise.resolve().then(() => handler(req, res, next)).catch(next));

router.use((req, res, next) => {
  if (!["GET", "HEAD"].includes(req.method)) return res.status(405).set("Allow", "GET, HEAD").end();
  if (req.url.length > 16000) return res.status(414).json({error: "Image URL is too long"});
  if (Object.values(req.query).some(value => typeof value !== "string")) {
    return res.status(400).json({error: "Each query parameter must have a single value"});
  }
  next();
});

// claim route: name, coa, password [optional]
get("/claim/:seed/:coa/:key?", async function (req, res, next) {
  const seed = parseSeed(req.params.seed);

  // Not allowed to claims numeric names
  if (Number.isInteger(+seed)) {
    res.status(403).send(`<h1>Armoria API</h1>
    <p>Numeric name <code>${html(seed)}</code> cannot be claimed. Please provide alphabetic or alphanumerical name.</p>
    <p>See <a href="https://github.com/Azgaar/armoria-api#readme" target="_blank">README</a> for guidance.</p>`);
    console.error(`Cannot claim numerical name ${seed}`);
    return;
  }

  const key = req.params.key;
  const collection = req.app.locals.collection;

  if (!collection) {
    res.status(400).send(`<h1>Armoria API</h1><p>Cannot connect to the database</p>`);
    console.error(`Cannot claim as database connection is down`);
    return;
  }

  const claim = await getClaim(collection, seed);

  // No rights to update exising claim
  if (claim && claim.key && claim.key !== key && (!process.env.MASTER_KEY || key !== process.env.MASTER_KEY)) {
    res.status(403).send(`<h1>Armoria API</h1>
    <p>Name <code>${html(seed)}</code> is already claimed. Please provide correct password to update the claim.</p>
    <p>See <a href="https://github.com/Azgaar/armoria-api#readme" target="_blank">README</a> for guidance.</p>`);
    console.error(`Cannot reclaim ${seed}: incorrect key`);
    return;
  }

  try {
    const coaString = req.params.coa;
    const coa = parseCoa(coaString);

    const size = parseSize(req.query.size);
    const colors = getColors(req.query);
    coa.shield = coa.shield || SHIELD_DEFAULT;
    const svg = await render(imageId(seed), coa, size, colors);
    const link = `${req.baseUrl}/svg/${size}/${encodeURIComponent(seed)}`;

    if (claim) await reclaim(collection, {name: seed, coa, key});
    else await setClaim(collection, {name: seed, coa, key});

    res.status(200).send(`<h1>Armoria API: <i>${html(seed)}</i> is ${claim ? "reclaimed" : "claimed"}</h1>
    <p>Now use it like <a href="${html(link)}">${html(link)}</a></p>
    ${svg}
    <p>COA: <code>${html(coaString)}</code></p>
    <p>See <a href="https://github.com/Azgaar/armoria-api#readme" target="_blank">README</a> for guidance.</p>`);
    console.log(`${seed} is ${claim ? "reclaimed" : "claimed"}`);
  } catch (error) {
    return next(error);
  }
});

// unclaim route: name, password [optional]
get("/unclaim/:seed/:key?", async function (req, res, next) {
  const seed = parseSeed(req.params.seed);
  const key = req.params.key;

  const collection = req.app.locals.collection;

  if (!collection) {
    res.status(400).send(`<h1>Armoria API</h1><p>Cannot connect to the database</p>`);
    console.warn(`Cannot unclaim as database connection is down`);
    return;
  }

  const claim = await getClaim(collection, seed);

  // Nothing to unclaim
  if (!claim) {
    res.status(400).send(`<h1>Armoria API</h1>
    <p>Cannot unclaim ${html(seed)} as it was not claimed before.</p>
    <p>See <a href="https://github.com/Azgaar/armoria-api#readme" target="_blank">README</a> for guidance.</p>`);
    console.error(`Cannot unclaim as ${seed} is not claimed`);
    return;
  }

  // No rights to update exising claim
  if (claim && claim.key && claim.key !== key && (!process.env.MASTER_KEY || key !== process.env.MASTER_KEY)) {
    res.status(403).send(`<h1>Armoria API</h1>
    <p><code>${html(seed)}</code> claim is password protected. Please provide correct password to unclaim.</p>
    <p>See <a href="https://github.com/Azgaar/armoria-api#readme" target="_blank">README</a> for guidance.</p>`);
    console.error(`Cannot unclaim ${seed}: incorrect key`);
    return;
  }

  try {
    await unclaim(collection, seed);
    res.status(200).send(`<h1>Armoria API: <i>${html(seed)}</i> is unclaimed</h1>
    <p>See <a href="https://github.com/Azgaar/armoria-api#readme" target="_blank">README</a> for guidance.</p>`);
    console.log(`${seed} is unclaimed`);
  } catch (error) {
    return next(error);
  }
});

// basic route: format, size, seed [optional]
get("/:format/:size/:seed?", async function (req, res, next) {
  const format = parseFormat(req.params.format);
  const size = parseSize(req.params.size);
  const seed = req.params.seed ? parseSeed(req.params.seed) : String(randomInt(1e9));
  const colors = getColors(req.query);

  try {
    const collection = req.app.locals.collection;
    const coa = await getCOA(collection, seed);
    if (req.query.shield) coa.shield = req.query.shield;
    coa.shield = parseShield(coa.shield);

    const id = imageId(seed);
    const svg = await render(id, coa, size, colors);
    send(format, svg, res);
  } catch (error) {
    return next(error);
  }
});

// extended route: queries
get("/", async function (req, res, next) {
  const format = parseFormat(req.query.get || req.query.format);
  const size = parseSize(req.query.size);
  const seed = req.query.seed ? parseSeed(req.query.seed) : String(randomInt(1e9));
  const colors = getColors(req.query);
  const coaString = req.query.coa;

  try {
    const collection = req.app.locals.collection;
    const coa = coaString ? parseCoa(coaString) : await getCOA(collection, seed);
    if (req.query.shield) coa.shield = req.query.shield;
    coa.shield = parseShield(coa.shield);

    const id = imageId(coaString || seed);
    const svg = await render(id, coa, size, colors);
    send(format, svg, res);
  } catch (error) {
    return next(error);
  }
});

// exception route: error
router.use(function (req, res) {
  res.status(404).send(`<h1>Armoria API</h1>
  <p>API for generating and retrieving heraldry images from server.</p>
  <img src="https://raw.githubusercontent.com/Azgaar/Armoria/master/public/preview.png" alt="preview"/>
  <p>See <a href="https://github.com/Azgaar/armoria-api#readme" target="_blank">README</a> for guidance.</p>`);
});

function getColors(query) {
  const getColor = color => (/^[0-9a-f]{6}$/i.test(query[color]) ? "#" + query[color] : null);
  const colors = {...require("./app/dataModel").colors};
  Object.keys(colors).forEach(color => (colors[color] = getColor(color) || colors[color]));
  return colors;
}

function parseSeed(query) {
  if (query.length > 256 || /[\x00-\x1f]/.test(query)) throw new Error("Invalid seed");
  return query.toLowerCase().replace(/#| |'/g, "_");
}

function parseSize(value) {
  if (value === undefined) return SIZE_DEFAULT;
  if (!/^\d+(?:px)?$/.test(value)) throw new Error("Invalid size");
  const size = parseInt(value, 10);
  if (size < 1 || size > 2048) throw new Error("Size must be between 1 and 2048");
  return size;
}

function parseFormat(value = FORMAT_DEFAULT) {
  if (!["svg", "png"].includes(value)) throw new Error("Format must be svg or png");
  return value;
}

function parseShield(value = SHIELD_DEFAULT) {
  if (!Object.hasOwn(shieldPaths, value)) throw new Error("Unknown shield");
  return value;
}

function imageId(seed) {
  return "coa" + createHash("sha256").update(String(seed)).digest("hex").slice(0, 16);
}

function html(value) {
  return String(value).replace(/[&<>"']/g, char => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"})[char]);
}

function parseCoa(value) {
  const coa = JSON.parse(value);
  function validate(item, depth = 0) {
    if (depth > 16) throw new Error("COA is too deeply nested");
    if (typeof item === "string" && /[<>"'&\x00-\x1f]/.test(item)) throw new Error("Invalid COA text");
    if (typeof item === "number" && (!Number.isFinite(item) || Math.abs(item) > 10000)) throw new Error("Invalid COA number");
    if (item && typeof item === "object") {
      if (Object.keys(item).length > 256) throw new Error("COA is too complex");
      Object.values(item).forEach(child => validate(child, depth + 1));
    }
  }
  validate(coa);
  if (!coa || typeof coa.t1 !== "string") throw new Error("Missing field tincture");
  if (coa.shield) parseShield(coa.shield);
  return coa;
}

async function getCOA(collection, seed) {
  const numeric = Number.isInteger(+seed);
  if (numeric) return require("./app/generator")(seed);

  const claimed = collection && (await getClaim(collection, seed));
  return claimed && claimed.coa ? claimed.coa : require("./app/generator")(seed);
}

async function getClaim(collection, name) {
  return collection.findOne({name});
}

async function setClaim(collection, claim) {
  return collection.insertOne(claim);
}

async function reclaim(collection, claim) {
  return collection.updateOne({name: claim.name}, {$set: {coa: claim.coa}});
}

async function unclaim(collection, name) {
  return collection.deleteOne({name});
}

function send(format, svg, res) {
  if (format === "svg") {
    const svgMinified = require("minify-xml").minify(svg);
    res.status(200).type("image/svg+xml").send(svgMinified);
  } else {
    const opts = {
      font: {loadSystemFonts: false},
      logLevel: "off"
    };
    const resvg = new Resvg(svg, opts);
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    res.writeHead(200, {"Content-Type": "image/png", "Content-Length": pngBuffer.length});
    res.end(pngBuffer);
  }
}

module.exports = router;
