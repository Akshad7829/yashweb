const http = require('http');

const express = require('express');

//express app

const app = express();

//register view engine

app.set('view engine','ejs');

app.listen(8080);

//get methods
app.get('/contact',function(req,res){
    res.render('contact',{title:'Contact Me'})
});
//get methods
app.get('/',function(req,res){
    res.render('index',{title:'Home'})
});

