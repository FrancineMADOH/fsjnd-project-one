"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var imgRoute_1 = __importDefault(require("./apiRoutes/imgRoute"));
var router = express_1.default.Router();
router.get("/", function (req, res) {
  var allImages = fs_1.default
    .readdirSync(path_1.default.join(__dirname, "../../public/images/"))
    .map(function (el) {
      return el.slice(0, -4);
    });
  res.render("apiView", { files: allImages });
});
router.use("/resize", imgRoute_1.default);
exports.default = router;
