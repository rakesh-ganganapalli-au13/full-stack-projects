const product = require('../../models/adminProducts');
const user   = require('../../models/signUp');



const userProducts={

    async getAllProducts(req,res){
        await product.find({},(err,pro)=>{
            if(err) return console.log(err);
    
            const data = {
                email :req.body.data.email,
                title : "All products",
                name  : 'All products',
                products : pro
            }
            res.render('user/products',data)
        })
        
    },


    async getProduct(req,res){

        let slug = req.params.category;
    
       let result = await product.find({category:slug});
    
       let data = {
           email    :req.body.data.email,
           title    : 'products',
           name     :  slug,
           products : result
       };
    
       res.render('user/products',data);
    
    },

    
    async getProductDetails(req,res){

        // console.log(req.params)

        const cat = req.params.category;
        const pro = req.params.product;
    
        const result = await product.find({category:cat,slug:pro});
    
        const data = {
           email    :req.body.data.email,
           title    : 'products',
           product  : result[0]
        };
    
       res.render('user/productDetails',data);
    
    }
}

module.exports = userProducts;