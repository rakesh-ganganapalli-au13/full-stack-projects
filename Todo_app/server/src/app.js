const express = require('express');
const cors = require('cors')

const DBconnect = require('./config/DBconnection')
const User      = require('./models/UserModel')
const Todos      = require('./models/TodoModel')


const app = express();
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(cors())

//connect to db
DBconnect()

app.get('/',(req,res)=>{
    res.json({msg:"hello"})
})

/*
for : Register
Method:Post 
*/
app.post('/register',async(req,res)=>{

    const {email,password} = req.body;

    if(!email || !password){
        return res.status(500).json({message:"Enter all detailes"})
    }

    const userExist = await User.findOne({email}).lean()
    
    if(userExist){
        return res.status(500).json({message:"email already exists"})
    }

    const newUser = new User({email,password})

    await newUser.save()

    res.json({email,password})

})

/*
for : Login
Method:Post 
*/
app.post('/login',async(req,res)=>{

    const {email,password} = req.body;

    const userExist = await User.findOne({email}).lean()
    
    if(!userExist || userExist.password !== password){
        return res.status(403).json({message:"Invalid Credentials"})
    }
    res.json({email,password})
    

})

/*
for : Todo
Method:Post 
*/
app.post('/todos',async(req,res)=>{

    const {authorization} = req.headers
    const [,credentials] = authorization.split(" ")
    const [email,password] = credentials.split(":")
    const todosItems = req.body

    const userExist = await User.findOne({email}).lean()
    if(!userExist || userExist.password !== password){
        return res.status(401).json({message:"Invalid acess"})
    }

   const todos= await Todos.findOne({userId:userExist._id}).exec()

    if(!todos){  
        const ntodo = new Todos({ 
            userId: userExist._id,
            todos: todosItems
        })
        ntodo.save()
        
    }else{
        todos.todos = todosItems
        await todos.save()
    }

    res.status(200).json({messege:"created todo"})

})

/*
for : Todo
Method:Get 
*/
app.get('/todos',async(req,res)=>{

    const {authorization} = req.headers
    const [,credentials] = authorization.split(" ")
    const [email,password] = credentials.split(":")

    const userExist = await User.findOne({email}).lean()
    if(!userExist || userExist.password !== password){
        return res.status(401).json({message:"Invalid acess"})
    }

   const {todos}= await Todos.findOne({userId:userExist._id}).exec()

//    console.log(todos)
    res.status(200).json(todos)

})


app.listen(PORT,console.log(`surver running on port ${PORT} `))