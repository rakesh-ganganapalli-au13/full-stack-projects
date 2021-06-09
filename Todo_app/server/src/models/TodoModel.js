const mongoose = require('mongoose');


const TodoSchema = new mongoose.Schema({

    userId: mongoose.Schema.ObjectId,
    todos:[
        {
            text:String,
            checked:Boolean,
            id:String
        }
    ]
})

module.exports = mongoose.model('Todos',TodoSchema)