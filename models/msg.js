const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const msgSchema = new Schema({
    fName: {
            type:String,
            required:true
    },
    lName: {
        type: String,
        required:true
    },
    eMail: {
        type:String,
         required:true   
    },
    body:{
        type:String,
        required:true
    }
},{timestamps:true});

const Message = mongoose.model('Message',msgSchema);
module.exports = Message;