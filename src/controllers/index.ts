import { Request, Response, NextFunction } from 'express'
import { connect } from '../database'
import { IUser, IUserForm } from '../interface/IUser'

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  const con = connect()
  const conPromise = con.promise()
  const result = await conPromise.query('SELECT * FROM user_info ')
  return res.json({
    code: 200,
    data: result[0],
  })
}

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  const userField: IUser = req.body
  const con = connect()
  const conPromise = con.promise()
  await conPromise.query('INSERT INTO user_info SET ?', [userField])
  return res.status(201).json({
    code: 201,
    message: 'User created',
  })
}
