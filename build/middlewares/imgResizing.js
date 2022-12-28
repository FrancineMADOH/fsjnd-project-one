"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResizedImagePath = exports.resizeImage = void 0;
var path = require("path");
var sharp = require("sharp");
var inputFolder = path.join(__dirname, "../../public/images");
var outputFolder = path.join(__dirname, "../../public/thumbnails");
function resizeImage() {
    var newImage = function (imgName, imgWidth, imgHeight) {
        return sharp(path.join("".concat(inputFolder, "/").concat(imgName, ".jpg")))
            .resize({ width: imgWidth, height: imgHeight })
            .toFormat("jpg", { mozjpg: true })
            .toBuffer();
    };
    return newImage;
}
exports.resizeImage = resizeImage;
;
function getResizedImagePath() {
    var newImagePath = function (imgName, imgWidth, imgHeight) {
        return "".concat(outputFolder, "/").concat("res_").concat(imgName).concat(imgWidth).concat(imgHeight, ".jpg");
    };
    return newImagePath;
}
exports.getResizedImagePath = getResizedImagePath;
;
//export default { resizeImage, getResizedImagePath};
