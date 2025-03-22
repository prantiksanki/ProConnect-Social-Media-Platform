const mongoose = require('mongoose');

const mongooseSchema = mongoose.Schema({
   post_id:
   {
    type: String , 
    required: true, 
    unique: true, 
    // ref: 'User'
   }, 
   user_id:
   {
    type: String , 
    required: true, 
    unique: false , 
    // ref: 'User'
   }, 
   content:
   {
    type: String , 
    required: true, 
    max: 1000, 
    min: 10, 
   }, 
   image:
   {
    type: String, 
    required: false, 
   }
}, 
{
    timestamps: true
})

const postModel  = mongoose.model('post', mongooseSchema);

module.exports = postModel;