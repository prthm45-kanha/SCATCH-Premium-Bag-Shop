const express=require('express');
const app=express();
const path=require('path');

const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const cookieParser=require('cookie-parser');
const userModel=require('./models/user-model');
app.use(cookieParser());

const ownersRouter=require('./routes/ownersRouter');
const productsRouter=require('./routes/productsRouter');
const usersRouter=require('./routes/usersRouter');

const db= require('./config/mongoose-connection');

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);

app.listen(3000,()=>{
    console.log('server runnung on port 3000');
})
