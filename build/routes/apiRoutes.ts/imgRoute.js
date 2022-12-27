"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imgResizing_1 = __importDefault(require("../../middlewares/imgResizing"));
var imgRouter = express_1.default.Router();
imgRouter.use(imgResizing_1.default);
imgRouter.get("/", function (req, res) {
    res.send("image router");
});
exports.default = imgRouter;
