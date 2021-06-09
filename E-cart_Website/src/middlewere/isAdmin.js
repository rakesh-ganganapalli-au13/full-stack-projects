const user   = require('../models/signUp');
const jwt = require('jsonwebtoken')


const isAdmin = (req,res,next) => {

    const authToken = req.cookies.auth;

    if(!authToken ){
        return res.redirect('/')
    }

    try {
        let payload = jwt.verify(authToken,"secreatKey",async(err,result)=>{
            if(err){
                console.log("Invalid Token")
                return result.clearCookie('auth').redirect('/')   
            }
            //  req.body.data = await users.findOne({email :result.email}).lean()
            if(result.email == 'rakeshganganapalli72@gmail.com') {
                next();
            }else{
                return res.redirect('/api/user/Allproducts');
            }
        });

    }catch(e){
        console.log(e)
    }

}
module.exports = isAdmin;