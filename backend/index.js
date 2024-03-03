import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

import personRouter from "./routes/PersonsRoute.js";

const app = express();
const Port = process.env.PORT;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));

app.use("/api/", personRouter);

app.listen(Port, () => {
  console.log(`Server is running on ${Port}`);
});
