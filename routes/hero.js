var express = require('express');
var router = express.Router();

var HeroModel = require('../models/heroModels');

router.get('/test', function(req, res) {
  console.log('in tester thinger');

  var jazzy = new heroModel({
    alias: 'Secret',
    first_name: 'Jazzy',
    last_name: 'Cordaro',
    city: 'MG',
    power_name: 'very strong'
  });
});

jazzy.save(function(err){
  if(err){
    console.log(err);
    res.sendStatus(500);
  }else{
    console.log('Jazzy saved!');
    res.sendStatus(201);
    }
  });
});

router.get('/', function(req, res){
  console.log('in heros get');

  HeroModel.find({}, function(err, heroResults){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('found heros!');
      res.send(heroResults);
    }
  })
})
