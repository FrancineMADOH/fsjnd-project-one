import express from "express";

const router = express.Router();

const imgRouter = router.get('/image',(req,res)=>{
    res.send('Hello image route')
})

module.exports = imgRouter