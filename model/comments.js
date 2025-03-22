const mongoose = require('mongoose'); 
 
const mongooseModel = mongoose.Schema(
    {
        comment_id :
        {
            type : String,
            required : true, 
            unique : true, 
        } , 
        post_id :
        {
            type : String,
            required : true,
            unique : false,
        }, 
        user_id:
        {
            type : String,
            required : true,
            unique : false,
        }, 
        comment_text :
        {
            type : String,
            required : true,
            unique : false,
            maxlength: 500,
            minlength: 1,
        }, 

    }
)

const commentModel = mongoose.model("comment" , mongooseModel); 

module.exports = commentModel;