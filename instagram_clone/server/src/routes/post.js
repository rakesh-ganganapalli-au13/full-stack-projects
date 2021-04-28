const router = require('express').Router();
const isLogin = require('../middlewers/isLogin');
const post  = require('../models/post')

/*
path  : /createpost
Method : post
 */
router.post('/createpost',isLogin,async(req,res)=>{

    // console.log(req.user)
    const {title,body} = req.body;
    //1.checking errors
    if(!title || !body){
        return res.status(422).json({msg:"plese provide necessary feilds"})
    }

    //2.saving post
    let postData = new post({
        title,
        body,
        postedBy : req.user  //comes from the isLogin funciton
    })

     postData.save((err,saved)=>{
        if(err) return res.status(500).json({msg:"post not saved"})
        res.status(200).json({msg:saved})
    })

})


/*
path  : /allpost
Method : get
 */

router.get('/allpost',isLogin,async(req,res)=>{

    //finding all the posts
    const allPosts = await post.find({}).populate('postedBy','_id name').lean()  

    res.status(200).json({msg:allPosts})

})


/*
path  : /mypost
Method : get
 */

router.get('/mypost',isLogin,async(req,res)=>{

    //finding all the posts
    const myPosts = await post.find({postedBy:req.user._id}).populate('postedBy','_id name').lean()  

    res.status(200).json({msg:myPosts})

})

module.exports = router