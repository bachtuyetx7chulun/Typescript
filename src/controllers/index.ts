import { Request, Response, NextFunction } from 'express'
import { connect } from '../database'
import { IUser } from '../interface/IUser'
import { userCache, userCacheTime } from '../cache'

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  try {
    const { email } = req.query
    const con = connect()
    const conPromise = con.promise()
    let result
    if (email) {
      result = await conPromise.query(
        `SELECT * FROM user_info WHERE email='${email}'`
      )
    } else {
      result = await conPromise.query('SELECT * FROM user_info')
    }

    return res.status(200).json({
      code: 200,
      data: result[0],
    })
  } catch (error) {
    next(error)
  }
}

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  try {
    const userField: IUser = req.body
    const con = connect()
    const conPromise = con.promise()
    await conPromise.query('INSERT INTO user_info SET ?', [userField])
    return res.status(201).json({
      code: 201,
      message: 'User created',
    })
  } catch (error) {
    next(error)
  }
}
