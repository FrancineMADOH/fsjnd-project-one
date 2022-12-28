"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var indexRoute_1 = __importDefault(require("./routes/indexRoute"));
var app = (0, express_1.default)();
var port = 4000;
//setting up a view engine
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "../views"));
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.use("/api", indexRoute_1.default);
app.get("/", function (req, res) {
    res.render("index");
});
app.listen(port, function () {
    console.log("Listening on port:".concat(port));
});
exports.default = app;
