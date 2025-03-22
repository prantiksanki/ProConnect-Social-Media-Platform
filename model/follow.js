const mongoose = require('mongoose');

const mongooseModel = mongoose.Schema({
    follow_id :
    {
        type : String,
        required : true, 
    }, 
    follower_id :
    {
        type : String,
        required : true,
    }, 
    status :
    {
        type : Boolean,
        required : true,
        default : 'active'
    }, 

}, 
{
    timestamps: true
}); 

const follow = mongooseModel.model("follow" , mongooseModel) ; 

module.exports = follow ;