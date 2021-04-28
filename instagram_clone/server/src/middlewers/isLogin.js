const jwt = require('jsonwebtoken');
require('dotenv').config();
const users = require('../models/users')

//checking is logedin or not
 const isLogin = (req,res,next) => {
     
    //1.checking token is exist or not
    const {authtoken} = req.headers;      //in headers we set authToken but we got in small letters so we destructure it in small letter(authtoken insted on authToken)

    if(!authtoken ){
        return res.status(401).json({msg:"plese provide token"})
    }7



    //2.verifying the token is correct or not
    try {
        let payload = jwt.verify(authtoken,process.env.JWT_SECRET,async(err,payload)=>{   //we got payload setup by us in previously
            if(err){
                console.log("Invalid Token")
                return res.status(401).json({msg:'token is invalid'})   
            }
            //3.collecting the payload and setup in res object for further use
            req.user =await users.findById(payload).lean()

            next()   
        });

        
    }catch(e){
        console.log(e)
    }
 }


module.exports = isLogin;
