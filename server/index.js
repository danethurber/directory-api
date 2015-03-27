var express = require('express');

var app = express();

app.use(function(req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});

app.get('/', function(req, res){
  res.send('hello world part 2');
});

module.exports = app;
