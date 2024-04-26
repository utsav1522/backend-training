import express from "express";
import dotenv from "dotenv";
import router from "./router.js";

const env = dotenv.config().parsed;

const app = express();

let port = env.PORT || 4000;
app.use("/api", router);

app.use("/", (req, res) => {
  res.send("<h1>Backend Training Assignment...</h1>");
});

app.listen(port, function () {
  console.log("Server Running on", Number(port));
});
