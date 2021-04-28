const router = require('express').Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const isLogin = require('../middlewers/isLogin')
const users = require('../models/users')

/*
path  : /
Method : get
 */

router.get('/',(req,res)=>{
    res.send("HEllo router")
})

/*
path  : /signup
Method : post
 */

router.post('/signup',async(req,res)=>{
    console.log(req.body)
    const {name,email,password} = req.body
    //1.checking errors
    if(!name|| !email || !password){
        return res.status(422).json({msg:"plese enter all required feilds"})
    }

    // 2.checking user exist or not
    let userExist = await users.findOne({email:email}).lean()

    if(userExist){
        return res.status(422).json({msg:"user already existed"})
    }

    // 3.hashing password
    let hashedPassword = bcrypt.hashSync(password,10)

    //4.saving data into database
    let data = new users({
        name:name,
        email:email,
        password:hashedPassword
    })

    await data.save()

    res.status(200).json({msg:'saved sucessfully'})
})


/*
path  : /signin
Method : post
 */

router.post('/signin',async(req,res)=>{
    
    const {email,password} = req.body
    //1.checking errors
    if(!email || !password){
        return res.json({msg:"plese add the all the required feilds"})
    }

    //2.checking user registered or not before login
    const registerdUser = await users.findOne({email:email}).lean()

    if(!registerdUser){
        return res.json({msg:"Email or Password is incorrect"})
    }

    //3.checking password
    const passwordExist = bcrypt.compareSync(password,registerdUser.password);
    if(!passwordExist){
        return res.json({msg:"Email or Password is incorrect"})
    }

    //4.providing unique token
    const token = jwt.sign({_id:registerdUser._id},process.env.JWT_SECRET)


    //4.responce
    res.json({token:token})

})




// router.get('/protected',isLogin,(req,res)=>{
//     // console.log(req.user)
//     res.status(200).json({msg :`hello ${req.user.name} `})
// })




module.exports = router;