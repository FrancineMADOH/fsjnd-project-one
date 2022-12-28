import fs from "fs";
import path from "path";
import express, { Request, Response } from "express";
import imgRouter from "./apiRoutes/imgRoute";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {

  const allImages: string[] = fs
    .readdirSync(path.join(__dirname,'../../public/images/'))
    //.readdirSync(path.resolve('/public/images'))
    .map((el) => el.slice(0, -4));
  res.render('apiView', { files: allImages });
});

router.use("/resize", imgRouter);

export default router;
