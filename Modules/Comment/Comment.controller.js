import { commentModel } from "../../Database/Models/Comment.model.js"
import mongoose from "mongoose";
import jwt from "jsonwebtoken"


const getComments=async (req,res) => {
      const { postId } = req.params;
   
    if (!mongoose.Types.ObjectId.isValid(postId)) {
      return res.status(400).json({ message: "Invalid post ID format" });
    }

    let comments = await commentModel.find({createdBy:req.decoded._id, Post: postId}).select(["content","-_id"]).populate("createdBy").populate("Post")
    res.json({message: "List Of  My comments", data: comments})
    
}
const Createcomment=async(req,res) => {
        let { postId } = req.params;
        console.log("postId:", postId);
    console.log("typeof postId:", typeof postId);
       
    const comment = await commentModel.create({
  content: req.body.content,
  createdBy: req.decoded._id,
  Post: postId
});

    res.status(201).json({
      message: "Comment created",
      data: comment,
    });
  }

const UpdateComment=async(req, res) => {
    let  { postId, commentId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(postId) || !mongoose.Types.ObjectId.isValid(commentId)) {
      return res.status(400).json({ message: "Invalid ID format" });
}
        
    let updatedComment = await commentModel.findOneAndUpdate({
           _id:commentId ,
           createdBy: req.decoded._id ,
            Post: postId 
        
    }, req.body, {new: true})

    if (!updatedComment) {
      return res.status(404).json({ error: 'comment  not found or not authorized' })};
      
 
    res.status(200).json({message: "Comment Updated", data: updatedComment})

}


const DeletedComment=async (req, res) => {
     let  { postId, commentId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(postId) || !mongoose.Types.ObjectId.isValid(commentId)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    let DeleteComment = await commentModel.findOneAndDelete({ _id: commentId,
           createdBy: req.decoded._id })

    if (!DeleteComment) {
      return res.status(404).json({ error: 'Not authorized' })};

    res.status(200).json({message: "comment Deleted", data: DeleteComment})
}

export {getComments,Createcomment,UpdateComment,DeletedComment}