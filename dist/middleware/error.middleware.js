"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleError = exports.GetError = void 0;
const GetError = (req, res, next) => {
    let error = new Error('Not found');
    error.status = 404;
    next(error);
    return;
};
exports.GetError = GetError;
const HandleError = (err, req, res, next) => {
    const httpCode = err.status || 500;
    return res.status(httpCode).json({
        error: {
            status: httpCode,
            message: err.message || 'Internal Server Error',
        },
    });
};
exports.HandleError = HandleError;
