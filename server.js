const express = require('express');
const file_system = require('fs');
const app = express();
const port = 3000;


//settingup templating engine

app.set('view engine', 'ejs');

// listenning server on port 8000
app.listen(port);

//handling static files

app.use('/assets', express.static('assets'));

//handling the server
app.get('/' , function(req, res){
  res.render('index');

});

app.get('/contact' , function(req, res){
  res.render('contact');

});

app.get('/profile' , function(req, res){
  res.render('profile');
});

console.log('server is running on port ' + port);
