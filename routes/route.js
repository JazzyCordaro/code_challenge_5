var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
  console.log(path.join(__dirname, '../public/index.html'));
  var indexFile = path.join(__dirname, '../public/index.html');
  res.sendFile(indexFile);
});

module.exports = router;
