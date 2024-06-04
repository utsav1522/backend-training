import express from "express";
import dotenv from "dotenv";
import router from "./router";
import cookieParser from "cookie-parser";
import { seedingData } from "./scripts/seeding";
import { Logger } from "./libs/requestLogger";
import { connectDb } from "./db";

const env = dotenv.config().parsed;
const app = express();
app.set("trust proxy", true);

seedingData();

let port = env!.PORT || 4000;

app.use("/api", router);
app.use(cookieParser());

app.use("/", (req, res) => {
  res.cookie("cookieName", "cookieOne", {
    expires: new Date(Date.now() + 900000),
  });

  res.cookie("theme", "dark", {
    expires: new Date(Date.now() + 900000),
  });

  Logger.info("Unsigned Cookies; ", req.cookies);
  Logger.info(req.headers.cookie);
  res.send("Backend Training Assignment...");
});
connectDb()
  .then(() => {
    app.listen(port, function () {
      Logger.info(`Server Running on ${Number(port)}`);
    });
  })
  .catch((error: any) => {
    Logger.error("Database Connection Error");
  });
