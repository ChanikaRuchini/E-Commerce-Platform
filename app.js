const express=require("express");
var appController=require('./controllers/appController');
var app=express();

//set up template engine

app.set('view engine','ejs');

//static files

app.use(express.static('./public'));

//fire controllers
appController(app);

//listen to port

app.listen(3000);
console.log('listning to port 3000');
