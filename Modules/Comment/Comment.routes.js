import verifyToken from "../../Middleware/verifyToken.js";
import express from "express"
import { Createcomment, DeletedComment, getComments, UpdateComment } from "./Comment.controller.js";

import commentvalidationMiddleWare from "../../Middleware/commentValidationMiddleware.js";


const CommentsRoutes = express.Router();
CommentsRoutes.use(verifyToken)

CommentsRoutes.get("/posts/:postId/comments",getComments)
CommentsRoutes.post("/posts/:postId/comments",commentvalidationMiddleWare,Createcomment)
CommentsRoutes.put("/posts/:postId/comments/:commentId",UpdateComment)
CommentsRoutes.delete("/posts/:postId/comments/:commentId",DeletedComment)

export default CommentsRoutes