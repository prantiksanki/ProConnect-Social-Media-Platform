const mongoose = require("mongoose");

const mongooseSchema = mongoose.Schema({
    like_id :
    {
        type : String,
        required : true,
        unique : true
    }, 
    post_id :
    {
        type : String,
        required : true
    }, 
    user_id :
    {
        type : String,
        required : true
    }, 

}, 
{
    timestamps: true
}) ; 

const likeModel  = mongoose.model('like', mongooseSchema);

module.exports = likeModel;