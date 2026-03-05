import { postModel} from "../../Database/Models/Post.model.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken"

const getPosts=async (req,res) => {
   
    let posts = await postModel.find({createdBy:req.decoded._id}).select(["title","-_id"]).populate("createdBy")
    res.json({message: "List Of  My Posts", data: posts})
    
}

const GetpostByid=async (req,res) => {
    let id = req.params.id
     if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Post ID format" });
        }
    let post = await postModel.findById(id)

    if (!post) {
      return res.status(404).json({ error: 'Post not found' })};
    res.json({message: "Post ", data: post})
    
}

const Createpost=async(req,res) => {
        let decoded = req.decoded
        req.body.createdBy = decoded._id
        let addPost  = await postModel.insertMany(req.body);
        res.json({mesaage: "Post Added", data: addPost});
    
}


const UpdatePost=async(req, res) => {
    let id = req.params.id

     if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Post ID format" });
        }
        
    let updatedPost = await postModel.findByIdAndUpdate({
           _id:id,
           createdBy: req.decoded._id 
    }, req.body, {new: true})

    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found or not authorized' })};
      
 
    res.status(200).json({message: "Post Updated", data: updatedPost})

}


const DeletedPost=async (req, res) => {
    let id = req.params.id
     if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Post ID format" });
        }
    let deletedPost = await postModel.findByIdAndDelete({ _id:id,
           createdBy: req.decoded._id })

    if (!deletedPost) {
      return res.status(404).json({ error: 'Not authorized' })};
    res.status(200).json({message: "Post Deleted", data: deletedPost})
}

export{getPosts,GetpostByid,Createpost,UpdatePost,DeletedPost}

