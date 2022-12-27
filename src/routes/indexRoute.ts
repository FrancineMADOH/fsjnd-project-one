import express ,{Request, Response } from  "express";
import imgRouter from "./apiRoutes.ts/imgRoute";

const router =  express.Router()


router.get("/", (req:Request,res:Response)=>{
    res.send("Main API route")
});

router.use("/resize",imgRouter);



export default router;