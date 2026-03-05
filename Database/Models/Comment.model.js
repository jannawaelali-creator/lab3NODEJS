import mongoose from "mongoose";


const commentSchema = new mongoose.Schema({
    
    content:{
        type: String,
        required: [true, "content is required"],
    },
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref: "User" 
    },
     Post:{
        type: mongoose.Types.ObjectId,
        ref: "Post" 
    },

},
{
    timestamps: true   
});

export const commentModel = mongoose.model("Comment", commentSchema)