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
  const shield = req.query.shield || null;
  const colors = getColors(req.query);

  const coa = require('./app/generator')(seed);
  if (shield) coa.shield = shield; // overwrite random selection
  const id = "coa" + seed;
  const svg = await render(id, coa, size, colors);

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
  const coaString = req.query.coa;

  const size = parseInt(req.query.size) || SIZE_DEFAULT;
  const format = req.query.get || req.query.format || FORMAT_DEFAULT;
  const shield = req.query.shield || null;
  const colors = getColors(req.query);

  let coa, id;
  if (coaString) {
    coa = JSON.parse(coaString);
    id = "coa" + Math.floor(Math.random() * 1e6);
  } else {
    coa = require('./app/generator')(seed);
    id = "coa" + seed;
  }

  // overwhite shield
  if (shield) coa.shield = shield;
  if (!coa.shield) coa.shield = SHIELD_DEFAULT;

  const svg = await render(id, coa, size, colors);
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

// home page, not implemented
router.get('/home', async function(req, res, next) {
  next();
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
  const {colors} = require('./app/dataModel');
  Object.keys(colors).forEach(color => colors[color] = getColor(color) || colors[color]);
  return colors;
}

module.exports = router;