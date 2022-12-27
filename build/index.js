"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var indexRoute_1 = __importDefault(require("./routes/indexRoute"));
var app = (0, express_1.default)();
var port = 4000;
app.use("/api", indexRoute_1.default);
app.get("/", function (req, res) {
    res.send("Hello, world!");
});
app.listen(port, function () {
    console.log("Listening on started at localhost:".concat(port));
});
exports.default = app;
