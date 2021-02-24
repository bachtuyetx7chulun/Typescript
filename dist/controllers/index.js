"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUsers = void 0;
const database_1 = require("../database");
const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        const con = database_1.connect();
        const conPromise = con.promise();
        if (email) {
            const { email } = req.query;
            const result = yield conPromise.query(`SELECT * FROM user_info WHERE email='${email}'`);
            return res.status(200).json({
                code: 200,
                data: result[0],
            });
        }
        else {
            const result = yield conPromise.query('SELECT * FROM user_info');
            return res.status(200).json({
                code: 200,
                data: result[0],
            });
        }
    }
    catch (error) {
        next(error);
    }
});
exports.getUsers = getUsers;
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userField = req.body;
        const con = database_1.connect();
        const conPromise = con.promise();
        yield conPromise.query('INSERT INTO user_info SET ?', [userField]);
        return res.status(201).json({
            code: 201,
            message: 'User created',
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createUser = createUser;
