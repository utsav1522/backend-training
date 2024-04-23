import express from "express";

import "dotenv/config.js";
import router from "./router.js";

let port = process.env.PORT || 4000;
const app = express();

app.use("/api", router);

app.listen(port, function () {
  console.log("Server Running on", Number(port));
});
