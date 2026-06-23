const express=require('express')
const router=express.Router();
const isloggedin=require('../middleware/isLoggedIn');

router.get('/',(req,res)=>{
    let error = req.flash('error');
    console.log("FLASH:", error);
    res.render('index',{ error });
});


router.get('/shop',isloggedin,(req,res)=>{
    res.render('shop');
})

module.exports=router;