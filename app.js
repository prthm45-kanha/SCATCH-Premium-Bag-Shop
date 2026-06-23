const express=require('express');
const app=express();
const path=require('path');

const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const cookieParser=require('cookie-parser');
const userModel=require('./models/user-model');
const expressSession=require('express-session');
const flash=require('connect-flash');

const ownersRouter=require('./routes/ownersRouter');
const productsRouter=require('./routes/productsRouter');
const usersRouter=require('./routes/usersRouter');
const indexRouter = require('./routes/index');

require('dotenv').config(); 

const db= require('./config/mongoose-connection');
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));

app.use(
    expressSession({
        resave:false,
        saveUninitialized:false,
        secret:process.env.EXPRESS_SESSION_SECRET,
    })
);
app.use(flash());


app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);
app.use("/",indexRouter);
app.listen(3000,()=>{
    console.log('server runnung on port 3000');
})
