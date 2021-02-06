const express = require('express');
const app = express();
const routes = require('./routes');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // set origin
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', routes);

app.listen(3000, function () {
  console.log(`App listening at http://localhost:3000`);
});
