const express = require('express');
const http = require('http');
const app = express();
const routes = require('./routes');

const PORT = process.env.PORT || '3000';

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // set origin
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', routes);

app.set('port', PORT);
const server = http.createServer(app);
server.listen(PORT, function () {
  console.log(`App listening at http://localhost:3000`);
});
