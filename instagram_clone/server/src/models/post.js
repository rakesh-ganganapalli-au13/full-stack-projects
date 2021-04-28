const mongoose = require('mongoose');
const {ObjectId}  = require('mongoose').Types



const postSchema = mongoose.Schema({

    title    : {type:String,required:true},
    body     : {type:String,required:true},
    photo    : {type:String,default:'No photo'},
    postedBy : { 
                    type :ObjectId,
                    ref : "User"
                 }
})

module.exports = mongoose.model('Post',postSchema)