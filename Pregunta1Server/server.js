
const express = require('express');

const app = express();

const hostname = "127.0.0.1";

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(5000, function () {
  console.log('server corriendo');
});
