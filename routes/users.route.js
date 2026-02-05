import express from 'express'
import { updateUser, getUser, createUser, getUserById } from '../controllers/user.controller.js';
import { checkAuth } from '../middlewares/auth.js';
import { validateUserId } from '../middlewares/user.js';
import { validateUserId_body } from '../middlewares/user.js';

const userRouter = express.Router();

userRouter.post("/",checkAuth, createUser);
userRouter.get("/", checkAuth, getUser);
userRouter.get("/getbyid", checkAuth, validateUserId_body, getUserById);
userRouter.patch("/:id", checkAuth, validateUserId, updateUser);

export default userRouter;