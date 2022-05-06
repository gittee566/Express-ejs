"use strict";

var express = require('express');

var game24solver = require('24game-solver/dist/24game-solver');

var app = express();
var port = 8000;
app.get('/sum', function (req, res) {
  var num1 = Number(req.query.num1);
  var num2 = Number(req.query.num2);
  var num3 = Number(req.query.num3);
  var num4 = Number(req.query.num4);

  if (num1 < 1 || num1 > 9) {
    res.status(403).send('error');
  } else if (num2 < 1 || num2 > 9) {
    res.status(403).send('error');
  } else if (num3 < 1 || num3 > 9) {
    res.status(403).send('error');
  } else if (num4 < 1 || num4 > 9) {
    res.status(403).send('error');
  }

  console.log(num1, num2, num3, num4);
  var sum = game24solver([num1, num2, num3, num4], 24);

  if (sum != '') {
    res.send("suscess<br>".concat(sum));
  } else res.send("fail");
});
app.listen(port, function () {
  console.log("Listening at http://localhost:".concat(port));
});