import path from "path";
import sharp from "sharp";

const inputFolder = path.join(__dirname, "../../public/images");
const outputFolder = path.join(__dirname, "../../public/thumbnails");

//This function resize the image following a given width and height
export function resizeImage() {
  const newImage = (imgName: string, imgWidth: number, imgHeight: number) => {
    return (
      sharp(path.join(`${inputFolder}/${imgName}.jpg`))
        .resize({ width: imgWidth, height: imgHeight })
        //.toFormat("jpg", { mozjpg: true })
        .toBuffer()
    );
  };
  return newImage;
}

//Rename the  resized image following a particular pattern
export function getResizedImagePath() {
  const newImagePath = (
    imgName: string,
    imgWidth: number,
    imgHeight: number
  ) => {
    return `${outputFolder}/${"res_"}${imgName}${imgWidth}${imgHeight}.jpg`;
  };
  return newImagePath;
}

//export default { resizeImage, getResizedImagePath};
