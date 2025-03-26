import fs from "fs";
import path from "path";
import express, { Request, Response } from "express";
import imgRouter from "./apiRoutes/imgRoute";


import swaggerJsDoc from  "swagger-jsdoc";
import swagerUI from "swagger-ui-express"


const swaggerOptions = {

    definition: {
      openapi: "3.1.0",
      info: {
        title: " Image processing api documentation",
        version: "1.0.1",
        description:"This project build a simple placeholder API The first use case allows you to place images into your frontend with the size set via URL parameters (and additional stylization if you choose) for rapid prototyping. The second use case is as a library to serve properly scaled versions of your images to the front end to reduce page load size. Rather than needing to resize and upload multiple copies of the same image to be used throughout your site, the API you create will handle resizing and serving stored images for you.",
      },
    },
    apis: ["src/routes/indexRoute.ts"]
  }
  
const swagerDocs = swaggerJsDoc(swaggerOptions);


const router = express.Router();
router.use('/api-docs', swagerUI.serve, swagerUI.setup(swagerDocs));



/**
 * @swagger
 * /api:
 *   get:
 *     summary: Returns the API documentation page
 *     description: This API will help you resize images via a popular npm library named sharp. As well as image resizing, operations such as rotation, extraction, compositing and gamma correction are available. 
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.get("/", (req: Request, res: Response): void => {
  const allImages: string[] = fs
    .readdirSync(path.join(__dirname, "../../public/images/"))
    .map((el) => el.slice(0, -4));
  res.render("apiView", { files: allImages });
});

/**
 * @swagger
 * /resize:
 *   get:
 *     summary: Resize the image with the provided size parameter
 *     parameters:
 *        - name : imgName
 *        - required:false
 *        - schema:
 *            type: string
 *        - description: integer giving the size you want your image tobe
 *     description: >
 *       How to use this API ? 
 * 
 * 
 *        -  The availables images on the server are listed below, each file has a name that might come useful when testing the API.
 *        -  After choosing the file you want to resize, provide the desire width and height then fill the query string with your parameter following this pattern:
 *        -  http:localhost:4000/api/resize?imgName="the name of the file you want to resize"&imgWidth="A positive integer of your choice for the width"&imgHeight="A positive integer of your choice for the Height"
 *        -  Congratulations ! Your image has been resize ! A new image with the provided size has been created in the thumbnail folder
 *        -  We have also explore caching so that when you refresh the page the image do not load again this improve the performance of our server
 * 
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 imgName:
 *                   type: string
 *                 imgHeight: 
 *                    type: number
 */
router.use("/resize", imgRouter);

export default router;
