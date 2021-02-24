"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_router_1 = require("./user.router");
const router = express_1.Router();
router.get('/', (req, res, next) => {
    const arr = {
        name: 'Truong Trung Hieu',
        age: 23,
    };
    console.log(`Nmae`, [arr]);
    res.json({
        status: 200,
        message: 'WellCome to the Api for management',
    });
});
router.use('/user', user_router_1.userRouter);
exports.default = router;
