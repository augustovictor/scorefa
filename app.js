var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send('Welcome to scorefa api');
});

app.listen(port, function() {
  console.log('Server running at http://localhost:' + port);
});
