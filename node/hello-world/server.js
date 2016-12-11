var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/hello', function (req, res) {
  let name = req.query.name;
  res.send('Hello '+name+'!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
