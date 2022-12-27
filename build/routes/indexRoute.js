"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imgRoute_1 = __importDefault(require("./apiRoutes.ts/imgRoute"));
var router = express_1.default.Router();
router.get("/", function (req, res) {
    res.send("Main API route");
});
router.use("/resize", imgRoute_1.default);
exports.default = router;
