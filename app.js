const http = require('http');

const express = require('express');
const mongoose = require('mongoose');
const Message = require('./models/msg')
const port = process.env.PORT || 3001;
//express app



const app = express();




app.set('view engine', 'ejs');
const dbURI="mongodb+srv://db:asn@7829@test.xtmowdy.mongodb.net/?retryWrites=true&w=majority";
// const dbURI="mongodb+srv://<user>:yash123456@@cluster0.hnaib.mongodb.net/myFirstDatabase?authSource=admin&compressors=zlib&retryWrites=true&w=majority&ssl=true";
mongoose.connect(dbURI,{ useNewUrlParser:true , useUnifiedTopology:true})
try {
    // Connect to the MongoDB cluster
     mongoose.connect(
      dbURI,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );

  } catch (e) {
    console.log("could not connect");
  }

// app.set('view engine','ejs');
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
        res.redirect('/success')
        
    })
    .catch((err) =>{
        console.log(err);
     
    });
})

app.get('/contact',function(req,res){
    res.render('contact',{title:'Yash Dhanlobhe',success:''});

});


//get methods
app.get('/',function(req,res){
    res.render('index',{title:'Yash Dhanlobhe'})
});

app.set('port',(process.env.PORT || 3000));
app.listen(app.get('port'),function(){
  console.log('Running on port '+app.get('port'));
});
app.listen(port , ()=>{
  console.log("connection on port " + port);
})