import express, { Request, Response, NextFunction } from 'express'

interface ResponseError extends Error {
  status?: number
}

const GetError = (req: Request, res: Response, next: NextFunction): void => {
  let error = new Error('Not found') as ResponseError
  error.status = 404
  next(error)
}

const HandleError = (
  err: ResponseError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const httpCode = err.status || 500
  res.status(httpCode).json({
    error: {
      status: httpCode,
      message: err.message || 'Internal Server Error',
    },
  })
}

export { GetError, HandleError }
