"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const userRouter = express_1.Router();
exports.userRouter = userRouter;
userRouter.get('/', controllers_1.getUsers);
userRouter.post('/', controllers_1.createUser);
