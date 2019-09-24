const express = require('express');
const hbs     = require('hbs');
const app     = express();
const path    = require('path');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/about', (req, res, next) => {
  res.render('about');
});

app.get('/gallery', (req, res, next) => {
  res.render('gallery');
});

app.listen(3000, ()=>{console.log("App is running on port 3000")});