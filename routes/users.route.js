import express from 'express'
import { updateUser, getUser, createUser } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.get("/", getUser);
userRouter.patch("/:id", updateUser);

export default userRouter;