import { IUser } from '../../interface/user.inferface'
import {
  Sequelize,
  Model,
  ModelDefined,
  DataTypes,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyHasAssociationMixin,
  Association,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  Optional,
} from 'sequelize'

export const UserModel = (sequelize: Sequelize) => {
  class User extends Model<IUser> implements IUser {
    public readonly id: string
    public userCode: string
    public userName: string
    public age: number
    public phone: string
    public address: string

    public readonly createdAt!: Date
    public readonly updatedAt!: Date
  }

  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        autoIncrement: true,
        primaryKey: true,
      },
      userCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
      },
      phone: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      tableName: 'users',
    }
  )

  return User
}
