import mongoose from "mongoose";

export const connection =mongoose.connect("mongodb://127.0.0.1:27017/cloud_node")
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

