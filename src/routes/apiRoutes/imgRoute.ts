import path from "path";
import fs from "fs";
import { promises as fspromises } from "fs";
import express, { Request, Response } from "express";
import {
  resizeImage,
  getResizedImagePath
} from "../../middlewares/imgResizing";

const imgRouter = express.Router();

imgRouter.get("/", async (req: Request, res: Response):Promise<void> => {
  try {
    const imgWidth = parseInt(req.query.imgWidth as string);
    const imgHeight = parseInt(req.query.imgHeight as string);
    const imgName = req.query.imgName as string;

    //file path
    const imgPath: string = getResizedImagePath()(imgName, imgWidth, imgHeight);

    if (fs.existsSync(imgPath) != true) {
      const newImage = await resizeImage()(imgName, imgWidth, imgHeight);
      //save the new image to the thumbnail folder
      await fspromises.writeFile(imgPath, newImage);
    }
    res.status(200).sendFile(path.resolve(imgPath));
  } catch (e) {
    res.status(500).send("An error occurs");
  }
});

export default imgRouter;
