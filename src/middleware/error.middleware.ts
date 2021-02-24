import { NextFunction, Request, Response } from 'express'

interface ResponseError extends Error {
  status?: number
}

const GetError = (
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  let error = new Error('Not found') as ResponseError
  error.status = 404
  next(error)
  return
}

const HandleError = (
  err: ResponseError,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  const httpCode = err.status || 500
  return res.status(httpCode).json({
    error: {
      status: httpCode,
      message: err.message || 'Internal Server Error',
    },
  })
}

export { GetError, HandleError }

