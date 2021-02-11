const express = require('express');
const router = express.Router();
const render = require('./app/renderer');

const SIZE_DEFAULT = 500;
const FORMAT_DEFAULT = "svg";
const SHIELD_DEFAULT = "heater";

// basic route, format, then size and then optional seed params
router.get('/:format/:size/:seed?', async function(req, res) {
  const format = req.params.format || FORMAT_DEFAULT;
  const size = parseInt(req.params.size) || SIZE_DEFAULT;
  const seed = req.params.seed || Math.floor(Math.random() * 1e9);
  const shield = req.query.shield || SHIELD_DEFAULT;
  const colors = getColors(req.query);

  const coa = require('./app/generator')(seed);
  const id = "coa" + seed;
  const svg = await render(id, coa, shield, size, colors);

  if (format === "png") {
    const svg2img = require('svg2img');

    svg2img(svg, function(error, buffer) {
      res.writeHead(200, {'Content-Type': 'image/png', 'Content-Length': buffer.length});
      res.end(buffer);
    });
  } else if (format === "jpg" || format === "jpeg") { 
    const svg2img = require('svg2img');

    svg2img(svg, {format: 'jpg', quality: 75}, function(error, buffer) {
      res.writeHead(200, {'Content-Type': 'image/jpeg', 'Content-Length': buffer.length});
      res.end(buffer);
    });
  } else {
    const svgMinified = require("minify-xml").minify(svg);
    res.type('application/xml').send(svgMinified);
  }
});

// extended route, queries
router.get('/', async function(req, res, next) {
  const seed = req.query.seed || Math.floor(Math.random() * 1e9);
  const coa = req.query.coa;

  const size = parseInt(req.query.size) || SIZE_DEFAULT;
  const format = req.query.get || req.query.format || FORMAT_DEFAULT;
  const shield = req.query.shield || SHIELD_DEFAULT;
  const colors = getColors(req.query);

  let coaObj, id;
  if (coa) {
    coaObj = JSON.parse(coa);
    id = "coa" + Math.floor(Math.random() * 1e6);
  } else {
    coaObj = require('./app/generator')(seed);
    id = "coa" + seed;
  }

  const svg = await render(id, coaObj, shield, size, colors);
  if (format === "png") {
    const svg2img = require('svg2img');

    svg2img(svg, function(error, buffer) {
      res.writeHead(200, {'Content-Type': 'image/png', 'Content-Length': buffer.length});
      res.end(buffer);
    });
  } else if (format === "jpg" || format === "jpeg") {
    const svg2img = require('svg2img');

    svg2img(svg, {format: 'jpg', quality: 75}, function(error, buffer) {
      res.writeHead(200, {'Content-Type': 'image/jpeg', 'Content-Length': buffer.length});
      res.end(buffer);
    });
  } else {
    res.type('application/xml').send(svg);
  }
});

// exception route, error
router.use(function(req, res) {
  res.status(404).send(`<h1>Armoria API</h1>
  <p>API for generating and retrieving heraldry images from server.</p>
  <img src="https://raw.githubusercontent.com/Azgaar/Armoria/master/public/preview.png" alt="preview"/>
  <p>See <a href="https://github.com/Azgaar/armoria-api#readme" target="_blank">README</a> for guidance.</p>`);
});

function getColors(query) {
  const getColor = color => query[color] && query[color].length === 6 ? "#" + query[color] : null;

  return {
    argent: getColor("argent") || "#fafafa",
    or: getColor("or") || "#ffe066",
    gules: getColor("gules") || "#d7374a",
    sable: getColor("sable") || "#333333",
    azure: getColor("azure") || "#377cd7",
    vert: getColor("vert") || "#26c061",
    purpure: getColor("purpure") || "#522d5b",
    murrey: getColor("murrey") || "#85185b",
    sanguine: getColor("sanguine") || "#b63a3a",
    tenné: getColor("tenné") || "#cc7f19"
  }
}

module.exports = router;