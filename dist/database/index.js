"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const configs_1 = require("../configs");
const connect = () => {
    const pool = mysql2_1.default.createPool({
        host: configs_1.DATABASE_HOST,
        user: configs_1.DATABASE_USER,
        database: configs_1.DATABASE_NAME,
        port: +configs_1.DATABASE_PORT,
        connectionLimit: 100,
        multipleStatements: true,
    });
    return pool;
    // query database using promises
    //   const [rows, fields] = await promisePool.query('SELECT 1')
    //   console.log(fields)
};
exports.connect = connect;
