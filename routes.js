const express = require('express');
const router = express.Router();
const render = require('./app/renderer');

const SIZE_DEFAULT = 500;
const FORMAT_DEFAULT = "svg";
const SHIELD_DEFAULT = "heater";

// claim route: name, coa, password [optional]
router.get('/claim/:seed/:coa/:key?', async function(req, res, next) {
  const seed = parseSeed(req.params.seed);

  // Not allowed to claims numeric names
  if (Number.isInteger(+seed)) {
    res.status(403).send(`<h1>Armoria API</h1>
    <p>Numeric name <code>${seed}</code> cannot be claimed. Please provide alphabetic or alphanumerical name.</p>
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
  if (claim && claim.key && claim.key !== key && key !== process.env.MASTER_KEY) {
    res.status(403).send(`<h1>Armoria API</h1>
    <p>Name <code>${seed}</code> is already claimed. Please provide correct password to update the claim.</p>
    <p>See <a href="https://github.com/Azgaar/armoria-api#readme" target="_blank">README</a> for guidance.</p>`);
    console.error(`Cannot reclaim ${seed}. Key expected: ${claim.key}. Key provided: ${key}`);
    return;
  }

  try {
    const coaString = req.params.coa;
    const coa = JSON.parse(coaString);

    const size = parseInt(req.query.size) || SIZE_DEFAULT;
    const colors = getColors(req.query);
    const svg = await render(seed, coa, size, colors);
    const link = `https://armoria.herokuapp.com/svg/${size}/${seed}`;

    if (claim) await reclaim(collection, {name:seed, coa, key});
    else await setClaim(collection, {name:seed, coa, key});

    res.status(200).send(`<h1>Armoria API: <i>${seed}</i> is ${claim ? "reclaimed" : "claimed"}</h1>
    <p>Now use it like <a href=${link}>${link}</a></p>
    ${svg}${key ? `<p>Password: <code>${key}</code></p>` : ""}
    <p>COA: <code>${coaString}</code></p>
    <p>See <a href="https://github.com/Azgaar/armoria-api#readme" target="_blank">README</a> for guidance.</p>`);
    console.log(`${seed} is ${claim ? "reclaimed" : "claimed"}. COA: ${coaString}. Key: ${key}`);
  } catch (error) {
    return next(error);
  }
});

// unclaim route: name, password [optional]
router.get('/unclaim/:seed/:key?', async function(req, res, next) {
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
    <p>Cannot unclaim ${seed} as it was not claimed before.</a></p>
    <p>See <a href="https://github.com/Azgaar/armoria-api#readme" target="_blank">README</a> for guidance.</p>`);
    console.error(`Cannot unclaim as ${seed} is not claimed`);
    return;
  }

  // No rights to update exising claim
  if (claim && claim.key && claim.key !== key && key !== process.env.MASTER_KEY) {
    res.status(403).send(`<h1>Armoria API</h1>
    <p><code>${seed}</code> claim is password protected. Please provide correct password to unclaim.</p>
    <p>See <a href="https://github.com/Azgaar/armoria-api#readme" target="_blank">README</a> for guidance.</p>`);
    console.error(`Cannot unclaim ${seed}. Key expected: ${claim.key}. Key provided: ${key}`);
    return;
  }

  try {
    await unclaim(collection, seed);
    res.status(200).send(`<h1>Armoria API: <i>${seed}</i> is unclaimed</h1>
    <p>See <a href="https://github.com/Azgaar/armoria-api#readme" target="_blank">README</a> for guidance.</p>`);
    console.log(`${seed} is unclaimed`);
  } catch (error) {
    return next(error);
  }
});

// basic route: format, size, seed [optional]
router.get('/:format/:size/:seed?', async function(req, res, next) {
  const format = req.params.format || FORMAT_DEFAULT;
  const size = parseInt(req.params.size) || SIZE_DEFAULT;
  const seed = req.params.seed ? parseSeed(req.params.seed) : Math.floor(Math.random() * 1e9);
  const colors = getColors(req.query);

  try {
    const collection = req.app.locals.collection;
    const coa = await getCOA(collection, seed);
    if (req.query.shield) coa.shield = req.query.shield;
    if (!coa.shield) coa.shield = SHIELD_DEFAULT;

    const id = "coa" + seed;
    const svg = await render(id, coa, size, colors);
    send(format, svg, res);
  } catch (error) {
    return next(error);
  }
});

// extended route: queries
router.get('/', async function(req, res, next) {
  const format = req.query.get || req.query.format || FORMAT_DEFAULT;
  const size = parseInt(req.query.size) || SIZE_DEFAULT;
  const seed = req.query.seed ? parseSeed(req.query.seed) : Math.floor(Math.random() * 1e9);
  const colors = getColors(req.query);
  const coaString = req.query.coa;

  try {
    const collection = req.app.locals.collection;
    const coa = coaString ? JSON.parse(coaString) : await getCOA(collection, seed);
    if (req.query.shield) coa.shield = req.query.shield;
    if (!coa.shield) coa.shield = SHIELD_DEFAULT;

    const id = "coa" + (seed || Math.floor(Math.random() * 1e6));
    const svg = await render(id, coa, size, colors);
    send(format, svg, res);
  } catch (error) {
    return next(error);
  }
});

// exception route: error
router.use(function(req, res) {
  res.status(404).send(`<h1>Armoria API</h1>
  <p>API for generating and retrieving heraldry images from server.</p>
  <img src="https://raw.githubusercontent.com/Azgaar/Armoria/master/public/preview.png" alt="preview"/>
  <p>See <a href="https://github.com/Azgaar/armoria-api#readme" target="_blank">README</a> for guidance.</p>`);
});

function getColors(query) {
  const getColor = color => query[color] && query[color].length === 6 ? "#" + query[color] : null;
  const {colors} = require('./app/dataModel');
  Object.keys(colors).forEach(color => colors[color] = getColor(color) || colors[color]);
  return colors;
}

function parseSeed(query) {
  return query.toLowerCase().replace(/#| |'/g, "_");
}

async function getCOA(collection, seed) {
  const numeric = Number.isInteger(+seed);
  if (numeric) return require('./app/generator')(seed);

  const claimed = collection && await getClaim(collection, seed);
  return claimed && claimed.coa ? claimed.coa : require('./app/generator')(seed);
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
    res.status(400).type("image/svg+xml").send(svgMinified);
  } else {
    const svg2img = require('svg2img');
    const options = format !== "png" ? {} : {format: "jpg", quality: 75};

    svg2img(svg, options, function(error, buffer) {
      res.writeHead(200, {'Content-Type': 'image/png', 'Content-Length': buffer.length});
      res.end(buffer);
    });
  }
}

module.exports = router;