import express from "express";
import { getPosts,GetpostByid,UpdatePost,DeletedPost, Createpost } from "./Post.controller.js";
import verifyToken from "../../Middleware/verifyToken.js";
import postvalidationMiddleWare from "../../Middleware/postValidationMiddleware.js";



const PostRoutes = express.Router();
PostRoutes.use(verifyToken) 

PostRoutes.get("/posts",getPosts);
//PostRoutes.get("/posts/:id",GetpostByid);
PostRoutes.post("/posts",postvalidationMiddleWare,Createpost);
PostRoutes.put("/posts/:id",UpdatePost);
PostRoutes.delete("/posts/:id",DeletedPost);

export default PostRoutes