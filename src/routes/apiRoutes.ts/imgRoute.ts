import express,{Request, Response } from  "express";
import resizeImage from "../../middlewares/imgResizing";

const imgRouter =  express.Router();
imgRouter.use(resizeImage);

imgRouter.get("/", (req:Request,res:Response)=>{
    res.send("image router");
});

export default imgRouter;