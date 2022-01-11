const mongoose = require('mongoose');
require('dotenv').config()


let db = mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true , useUnifiedTopology:true},()=>{
    console.log("DB connected sucessfully")
})

module.exports = db;