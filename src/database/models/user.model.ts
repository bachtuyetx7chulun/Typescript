import { IProject } from './../../interface/project.interface'
import { IUser } from '../../interface/user.interface'
import {
  AllowNull,
  Column,
  CreatedAt,
  DataType,
  Default,
  DeletedAt,
  HasMany,
  Model,
  NotEmpty,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript'
import Project from './project.model'

@Table({
  tableName: 'users',
  timestamps: true,
})
export default class User extends Model implements IUser {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id!: string

  @AllowNull(false)
  @NotEmpty
  @Column(DataType.STRING)
  userCode!: string

  @AllowNull(false)
  @NotEmpty
  @Column(DataType.STRING)
  userName!: string

  @AllowNull(false)
  @NotEmpty
  @Column(DataType.STRING)
  age!: number

  @AllowNull(false)
  @NotEmpty
  @Column(DataType.STRING)
  phone!: string

  @AllowNull(false)
  @Column(DataType.STRING)
  address: string

  @CreatedAt
  @AllowNull(false)
  @NotEmpty
  @Column(DataType.DATE)
  createdAt!: string

  @UpdatedAt
  @AllowNull(false)
  @NotEmpty
  @Column(DataType.DATE)
  updatedAt!: string

  @DeletedAt
  @AllowNull(false)
  @Column(DataType.DATE)
  deletedAt: string

  @HasMany(() => Project, 'projectContribute')
  projects: Project[]
}
