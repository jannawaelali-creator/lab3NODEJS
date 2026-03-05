import mongoose from "mongoose";


const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Author is required"],
    },
    content:{
        type: String,
        required: [true, "content is required"],
    },
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref: "User" 
    }

},
{
    timestamps: true   
});

export const postModel = mongoose.model("Post", postSchema)