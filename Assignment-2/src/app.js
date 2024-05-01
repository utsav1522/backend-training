import express from "express";
import dotenv from "dotenv";
import router from "./router.js";
import cookieParser from "cookie-parser";

const env = dotenv.config().parsed;
const app = express();

let port = env.PORT || 4000;
app.use("/api", router);
app.use(cookieParser());

app.use("/", (req, res) => {
  res.cookie("cookieName", "cookieOne", {
    expires: new Date(Date.now() + 900000),
  });

  res.cookie("theme", "dark", {
    expires: new Date(Date.now() + 900000),
  });

  console.log("Unsigned Cookies; ", req.cookies);
  console.log(req.headers.cookie);
  res.send("Backend Training Assignment...");
});

app.listen(port, function () {
  console.log("Server Running on", Number(port));
});
