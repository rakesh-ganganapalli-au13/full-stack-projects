const express = require('express');
const app = express();
require('dotenv').config();
const DB = require('./config/Db');
const port = process.env.PORT || 2000

//mongo db connection
DB()

//body-parser configuration
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//requiring and using routes
app.use(require('./routes/auth'))


app.listen(port,console.log(`server running at port ${port}`))