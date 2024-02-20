import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

import userRoutes from "./router/users";
import authRoutes from "./router/auth";

const app = express();

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello from backend" });
});

app.listen(5000, () => {
  console.log("Connected...");
});
