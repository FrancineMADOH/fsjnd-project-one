import path from "path";
import express, { Request, Response } from "express";
import router from "./routes/indexRoute";
const app = express();
const port = 4000;

//setting up a view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));

app.use("/api", router);

app.get("/", (req: Request, res: Response): void => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

export default app;
