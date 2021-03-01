import { Request, Response, NextFunction, Router } from 'express'

interface ResponseError extends Error {
  status?: number
}

export const getError = (
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  // * : First way
  //   const error = new Error('Not found')
  //   const errorResponse: ResponseError = {
  //     ...error,
  //     status: 404,
  //   }

  // * : Second way
  const errorResponse = new Error('Not found !') as ResponseError
  errorResponse.status = 404
  next(errorResponse)

  return
}

export const handleError = (
  err: ResponseError,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  return res.status(err.status || 500).json({
    error: {
      code: err.status || 500,
      message: err.message || 'Internal server error ',
      environment: process.env.NODE_ENV || 'Development',
    },
  })
}
