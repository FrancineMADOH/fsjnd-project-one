const path =  require("path")
import { error } from "console";
import { promises as fsPromises } from "fs";
const sharp = require("sharp");

const inputFolder = path.join(__dirname, "../../images");
const outputFolder = path.join(__dirname,"../../thumbnails");
console.log(outputFolder)


async function resizeImage(){
     try{
        const allImages:string[] = await fsPromises.readdir(inputFolder);
     
       
    
     }catch(err){
         console.log(err);
     }
}
resizeImage();

export default resizeImage;