var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({extended: false});
var port = process.env.PORT || 4242;
var path = require ('path');

app.listen(port, function(){
  console.log('server is listening on port 4242');
});

app.get('/', function(req,res){
  console.log('base url hit');

  res.sendFile(path.resolve('public/index.html'));
});

app.use(bodyParser.json());
app.use(express.static('public'));
