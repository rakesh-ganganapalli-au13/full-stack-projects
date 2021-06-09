const jwt = require('jsonwebtoken');
const users   = require('../models/signUp');



const isLoggedIn = (req,res,next) => {

    const authToken = req.cookies.auth

    // console.log(authToken)

    if(!authToken){
        return res.redirect('/');
    }
    try {
        const payload = jwt.verify(authToken,"secreatKey",async(err,res)=>{
            if(err){
                console.log("Invalid Token")
                return res.clearCookie('auth').redirect('/')   
            }
            // console.log(res)
            req.body.data = await users.findOne({email :res.email}).lean()
            next()   
        });

    }catch(e){
        console.log(e)
    }

}


module.exports = isLoggedIn;



