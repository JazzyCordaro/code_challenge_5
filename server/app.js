var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var connection = require('../modules/connection');
mongoose.connect(connection);

app.use(bodyParser.json());

app.use(express.static('public'));

// var indexRouter = require('../routes/index');
// app.use('/', indexRouter);
//
// var heroRouter = require('../routers/heros');
// app.use('/heros', heroRouter);

var portDecision = process.env.PORT || 4242;

var server = app.listen(portDecision, function() {
  var port = server.address().port;
  console.log('I am listening Jazzy, on port:', port);
});
























// var mongoose = require('mongoose');
// var express = require('express');
// var bodyParser = require('body-parser');
// var app = express();
// var urlencodedParser = bodyParser.urlencoded({extended: false});
// var port = process.env.PORT || 4242;
// var path = require ('path');
//
// app.listen(port, function(){
//   console.log('server is listening on port 4242');
// });
//
// app.get('/', function(req,res){
//   console.log('base url hit');
//
//   res.sendFile(path.resolve('public/index.html'));
// });
//
// app.use(bodyParser.json());
// app.use(express.static('public'));
