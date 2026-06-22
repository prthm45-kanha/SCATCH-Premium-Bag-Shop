const express=require('express');
const app=express();
const path=require('path');

const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const cookieParser=require('cookie-parser');
const userModel=require('./models/user-model');
app.use(cookieParser());

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.render('index');
})
app.listen(3000,()=>{
    console.log('server runnung on port 3000');
})
