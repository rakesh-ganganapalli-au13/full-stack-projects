const mongoose = require('mongoose');

const DBconnect = () => {
    try {
        mongoose.connect('mongodb://localhost/TODO',{ useNewUrlParser: true,useUnifiedTopology: true})
        console.log("DB connected!!")
    } catch (e) {
        console.log(e)
    }
    
}

module.exports = DBconnect