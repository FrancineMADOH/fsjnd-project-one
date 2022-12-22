import express from "express";

const app = express();
const port = 4000;

app.get("/hello", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Listening on started at localhost:${port}`);
});


export default app;

