const express=require("express");
const mongoose=require("mongoose");
const Cors=require("cors");
const dotenv=require("dotenv");
const authRoute=require("./routes/auth");
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');





//App config
const app=express();
const port = process.env.PORT || 8000;
dotenv.config({ path: './config.env' });
app.use(cookieParser());
require("./db/conn");



//Middleware
app.use(express.json())
app.use(Cors());


//APi endpoints
app.use("/api/auth",authRoute);




//Listener
app.listen(port,()=>{
    console.log(`Listening to the port ${port}`)
})
