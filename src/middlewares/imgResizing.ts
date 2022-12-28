const path = require("path")
const sharp = require("sharp");

const inputFolder = path.join(__dirname, "../../public/images");
const outputFolder = path.join(__dirname, "../../public/thumbnails");

export function resizeImage() {
    const newImage = ( imgName: string,imgWidth: number, imgHeight: number) => {
        return sharp(path.join(`${inputFolder}/${imgName}.jpg`))
            .resize({ width: imgWidth, height: imgHeight })
            .toFormat("jpeg", { mozjpeg: true })
            .toBuffer();
    }
    return newImage
};

export function getResizedImagePath(){
    const newImagePath = ( imgName: string,imgWidth: number, imgHeight: number) => {
        return `${outputFolder}/${"res_"}${imgName}${imgWidth}${imgHeight}.jpg`
    }
    return newImagePath;
};





//export default { resizeImage, getResizedImagePath};
