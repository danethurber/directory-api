require('dotenv').load();

var server = require('./server');
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Example app listening at http://localhost:%s', port)
});
