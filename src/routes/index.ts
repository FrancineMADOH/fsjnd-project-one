import express from "express";

const router = express.Router();

router.get('/api', (req,res)=>{
    return "Hello World"
})