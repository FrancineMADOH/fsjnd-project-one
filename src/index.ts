import path from "path";
import express, { Request, Response } from "express";
import router from "./routes/indexRoute";
const app = express();
const port = 4000;

app.use(express.static(path.join(__dirname, "../../../public")));
app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

export default app;
