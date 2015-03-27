var express = require('express');
var api = require('../api');

var app = express();

app.use('/v1', api);

app.use(function(req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});

module.exports = app;
