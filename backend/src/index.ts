import express, { Request, Response } from "express";
import cors from "cors";
import { log } from "console";
import mongoose from "mongoose";
import { PORT, MONGODB_CONNECTION_STRING } from "./config/dotenv";

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(MONGODB_CONNECTION_STRING as string)
  .then(() => log("Connected to database!"))
  .catch((error) => error.message);

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello" });
});

app.listen(PORT, () => {
  log(`server listening on port: ${PORT}`);
});
