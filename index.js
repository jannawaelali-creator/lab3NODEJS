import express from "express";
import mongoose from "mongoose";
import { connection } from "./Database/dbConnect.js";
import PostRoutes from "./Modules/Post/Post.routes.js";
import userRoutes from "./Modules/User/User.routes.js";
import CommentsRoutes from "./Modules/Comment/Comment.routes.js";
import globalError from "./Middleware/CatchError.js"
import morgan from "morgan"

const app = express();

app.use(morgan("dev"))
app.use(express.json())
connection;
app.use(userRoutes);
app.use(PostRoutes);
app.use(CommentsRoutes)
app.use(globalError);


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});