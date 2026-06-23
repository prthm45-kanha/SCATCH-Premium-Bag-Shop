const express=require('express');
const router=express.Router();
const { registerUser,loginUser,logout } = require('../controllers/authContoller')
router.get('/',(req,res)=>{
    res.send("hey it's workinggg")
})

router.post('/register',registerUser);

router.post('/login',loginUser);

router.get('/logout',logout);

module.exports=router;