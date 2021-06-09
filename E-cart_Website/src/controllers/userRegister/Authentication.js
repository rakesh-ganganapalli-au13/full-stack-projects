const user   = require('../../models/signUp');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const userControllers = {

    getSignup(req,res){
        // console.log(req.path)
        // console.log(req)
        if(req.cookies.auth){
            return res.redirect('back')
        }
            const data = {
                name : '',
                email : '',
                phone : '',
                password:'',
                error : ''
                }
            res.render('userSignup_login/signUp',data);
    },

    postSignup(req,res){

        // console.log(process.env.SECREAT_KEY)
    
        req.checkBody('name','please enter name').notEmpty();
        req.checkBody('email','please enter email').notEmpty();
        req.checkBody('password','please enter password').notEmpty();
        req.checkBody('cpassword','please enter conform password').notEmpty();
    
        // console.log(req.body);
    
        
        const name = req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;
        const password = req.body.password;
    
        const errors = req.validationErrors();
    
        if(errors.length){
            const data = {
            name : name,
            email : email,
            phone : phone,
            password:password,
            error : errors
            }
            return res.render('userSignup_login/signUp',data);
        };
    
        if(password != req.body.cpassword){
            const data = { 
                name : name,
                email : email,
                phone : phone,
                password:password,
                error : [{msg:"password didn't match"}]
            }
            return res.render('userSignup_login/signUp',data);
        };
    
        const hashedPassword = bcrypt.hashSync(password,8);
    
        //checking user exist ot not if not then save user in db else throw error
    
       const userExist = user.findOne({email:email},(err)=>{
            if(err) return console.log(err)
        })
    
            if(!userExist){
    
                const data = {
                    name:name,
                    email:email,
                    phone:phone,
                    password:password,
                    error : [{msg:"Email already registered"}]
                }
                return res.render('userSignup_login/signUp',data);
    
            }

            const token = jwt.sign({email:req.body.email},"secreatKey");

            const users = new user({
                    name : name,
                    email:email,
                    phone:phone,
                    password:hashedPassword
                })
    
            users.save((err)=>{
                if(err) return console.log(err)
            })

            res.cookie('auth',token).redirect('/')
             
    },

    getLogin(req,res){
        // console.log(req)
        if(req.cookies.auth){
            return res.redirect('/api/user/Allproducts')
        }
        const data = {
            email : '',
            error : ''
            }
        res.render('userSignup_login/login',data);
    },

    async postLogin(req,res){

        req.checkBody('email','please enter email').notEmpty();
        req.checkBody('password','please enter password').notEmpty();
        
        
        const email = req.body.email;
        const password = req.body.password;
    
        const errors = req.validationErrors();
    
        if(errors.length){
            const data = {
            email : email,
            error : errors
            }
            return res.render('userSignup_login/login',data);
        };
    
        const userExist = await  user.find({email:email});
    
        if(!userExist.length) {
            const data = { 
                email : email,
                error : [{msg:"Email (or) password incorrect"}]
            }
            return res.render('userSignup_login/login',data);
    
        }
    
        // console.log(142,userExist);
    
        const passwordExist = await bcrypt.compare(password,userExist[0].password);
    
        // console.log(passwordExist)
    
        if(!passwordExist){
    
            const data = { 
                email : email,
                error : [{msg:"Email (or) password incorrect"}]
            }
            return res.render('userSignup_login/login',data);
        };
    
        // req.session.user = userExist[0]
        const token = jwt.sign({email:req.body.email},"secreatKey");

        // console.log(token)

        res.cookie('auth',token).redirect('/api/user/Allproducts')
    
        
    },

    getLogout(req,res){
        // console.log("logouted")    
        res.clearCookie('auth').redirect('/')
    }

}


module.exports = userControllers;