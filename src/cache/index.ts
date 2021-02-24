import { IUser } from '../interface/IUser'

export interface IUserCache {
  TextRow: {
    id?: Number
    fullName: String
    age: Number
    email: String
  }
}

export var userCache: Array<IUser> = []
export var userCacheTime: Date
