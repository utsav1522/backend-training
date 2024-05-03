import express from "express";
import dotenv from "dotenv";
import router from "./router.js";
import { populateDb } from "../mock/sync.js";
import { data } from "../mock/mocking.js";
const env = dotenv.config().parsed;

if (!data.locations) { 
  populateDb();
  console.log("Database Populated");
} else {
  console.log("database already populated");
}

const app = express();
app.set("trust proxy", true);
let port = env.PORT || 4000;
app.use("/api", router);

app.listen(port, function () {
  console.log("Server Running on", Number(port));
});
