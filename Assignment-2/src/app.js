import express from "express";
import dotenv from "dotenv";
import router from "./router.js";

const env = dotenv.config().parsed;

const app = express();

app.set("trust proxy", true);

let port = env.PORT || 4000;
app.use("/api", router);

app.listen(port, function () {
  console.log("Server Running on", Number(port));
});
