"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResizedImagePath = exports.resizeImage = void 0;
var path_1 = __importDefault(require("path"));
var sharp_1 = __importDefault(require("sharp"));
var inputFolder = path_1.default.join(__dirname, "../../public/images");
var outputFolder = path_1.default.join(__dirname, "../../public/thumbnails");
//This function resize the image following a given width and height
function resizeImage() {
    var newImage = function (imgName, imgWidth, imgHeight) {
        return ((0, sharp_1.default)(path_1.default.join("".concat(inputFolder, "/").concat(imgName, ".jpg")))
            .resize({ width: imgWidth, height: imgHeight })
            //.toFormat("jpg", { mozjpg: true })
            .toBuffer());
    };
    return newImage;
}
exports.resizeImage = resizeImage;
//Rename the  resized image following a particular pattern
function getResizedImagePath() {
    var newImagePath = function (imgName, imgWidth, imgHeight) {
        return "".concat(outputFolder, "/").concat("res_").concat(imgName).concat(imgWidth).concat(imgHeight, ".jpg");
    };
    return newImagePath;
}
exports.getResizedImagePath = getResizedImagePath;
//export default { resizeImage, getResizedImagePath};
