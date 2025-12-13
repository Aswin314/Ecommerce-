import express, { json } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import ConnectDB from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
ConnectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("welcome");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
