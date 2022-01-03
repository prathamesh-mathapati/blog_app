require('dotenv').config()
// const { Route } = require('express');
const express = require("express");
const router=require('./router/index')
const app=express()

app.use(express.json())
app.use(router)
app.listen(process.env.port,()=>{
    console.log(`listen port number ${process.env.port}.`);
})

