const mongoose = require('mongoose');

const mongooseSchema = mongoose.Schema({
    user_id:
    {
        type : String, 
        required : true,
        unique : true
    }, 
    username:
    {
        type : String,
        required : true,
        unique : true
    }, 
    email:
    {
        type : String,
        required : true,
        unique : true
    }, 
    password:
    {
        type : String,
        required : true
    }, 
    fill_name :
    {
        type : String,
        required : true
    }, 
    address:
    {
        type : String,
        required : true
    }, 
    profile_picture:
    {
        type : String,
        required : true
    }, 

}, 
{
    timestamps: true
})

const userModel  = mongoose.model('User', mongooseSchema);

module.exports = userModel;