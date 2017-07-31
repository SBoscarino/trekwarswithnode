const express = require('express');
const mustache = require('mustache-express');
let router = express.Router()

const app = express();
const characters = require('./models.js');
const theMustEngine = mustache();
theMustEngine.cache = null;
app.engine('mustache', theMustEngine);
app.set('view engine', 'mustache');
app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('index');
});

app.get('/all', function(req, res){
  res.render('all', characters);
});

app.get('/startrek', function(req, res){
  res.render('startrek', {
    characters: characters.starT(),
    title: 'star trek poop'
  });
});

app.get('/starwars', function(req, res){
  res.render('starwars',{
    characters: characters.starW(),
    title: ' star wars poop'
  });

});
app.listen(3600, function(){
  console.log("hey");
  console.log(characters)
});
