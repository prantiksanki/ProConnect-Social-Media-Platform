const mongoose = require('mongoose');

const mongooseModel = mongoose.Schema({
    message_id :
    {
        type : String,
        required : true, 
        unique : true
    }, 
    sender_id :
    {
        type : String,
        required : true, 
        unique : false
    }, 
    receiver_id :
    {
        type : String,
        required : true, 
        unique : false
    },
    message_text:
    {
        type : String,
        required : true
    }, 
    seen:
    {
        type : Boolean,
        default : false
    }
},
{
    timestamps: true
})


const messages = mongoose.model('message' , mongooseModel)  ;

module.exports = messages ;
