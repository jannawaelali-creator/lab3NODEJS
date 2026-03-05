import express from "express";
import { listUsers, signin, signup, verifyAccount } from "./User.controller.js";
import hashPassword from "../../Middleware/hashPassword.js";
import checkEmail from "../../Middleware/CheckEmail.js";

import validationMiddleWareUSER from "../../Middleware/userValidationMiddleware.js";


let userRoutes = express.Router();

userRoutes.get("/users", listUsers);
userRoutes.post("/signup",validationMiddleWareUSER,checkEmail,hashPassword, signup);
userRoutes.post("/signin",checkEmail, signin)
userRoutes.get("/verify/:email",verifyAccount)

export default userRoutes

