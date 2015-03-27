var fs = require('fs');
var glob = require('glob');
var express = require('express');

var api = express.Router();

var files = glob.sync('api/**/*.json');

files.forEach(function(file){
  var mapping = file.replace('api', '').replace('.json', '');

  api.get(mapping, function(req, res){
    var data =  fs.readFileSync(file, 'utf8');
    res.send(data);
  });
});

api.get('/', function(req, res){
  var data = { status: 'it works' };
  res.send(data);
});

api.get('*', function(req, res, next){
  res.set({ 'Content-Type': 'application/json' });
  next();
});

module.exports = api;
