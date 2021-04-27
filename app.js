const http = require('http');

const express = require('express');
const mongoose = require('mongoose');
const Message = require('./models/msg')

//express app



const app = express();




//connect to mongodb
const dbURI="mongodb+srv://silentdude:asn1234@yashweb.m1c7k.mongodb.net/form?retryWrites=true&w=majority"
mongoose.connect(dbURI,{ useNewUrlParser:true , useUnifiedTopology:true})
.then((result) =>
app.listen(3000 ||process.env.PORT))
 .catch((err) => console.log(err))   

//register view engine

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));


//get methods

//moongose and mongo sandbox routes
// app.get('/add-msg',function(req,res){

//     const msg = new Message({
//         fName:'Akshad',
//         lName:'Nayakwadi',
//         eMail:'akshadsn03@gmail.com',
//         body:'hii'
//     });
//     msg.save()
//     .then((result) =>{
//         res.send(result)
//     })
//     .catch((err) =>{
//         console.log(err)
//     });
// })


app.get('/success',function(req,res){
    res.render('success')
})

app.get('/project',function(req,res){
    res.render('project')
})
app.post('/msg',function(req,res){
    const msg = new Message(req.body);
    msg.save()
    .then((result) =>{
        res.redirect('/')
        
    })
    .catch((err) =>{
        console.log(err);
     
    });
})

app.get('/contact',function(req,res){
    res.render('contact',{title:'Contact Me',success:''});

});


//get methods
app.get('/',function(req,res){
    res.render('index',{title:'Home'})
});

