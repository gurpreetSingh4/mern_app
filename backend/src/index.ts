import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import MyUserRoute from "./routes/MyUserRoute"

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then(()=>console.log("mongoDB connected"))
    .catch((err)=> console.log("err"));

const PORT = 7000;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/my/user", MyUserRoute);

app.listen(PORT, () => {
console.log(`Server started on localhost:${PORT}`);
});