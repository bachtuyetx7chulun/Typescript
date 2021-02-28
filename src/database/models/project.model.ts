import { IProject } from './../../interface/project.interface'
import {
  AllowNull,
  Column,
  DataType,
  Default,
  Model,
  NotEmpty,
  PrimaryKey,
  Table,
  ForeignKey,
  BelongsTo,
  Unique,
} from 'sequelize-typescript'
import User from './user.model'

@Table({
  tableName: 'projects',
  timestamps: true,
})
export default class Project extends Model implements IProject {
  @PrimaryKey
  @AllowNull(false)
  @NotEmpty
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string

  @AllowNull(false)
  @Column(DataType.STRING)
  projectName: string

  @AllowNull(false)
  @Column(DataType.INTEGER)
  projectExpense: number

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column(DataType.UUID)
  projectContribute: string

  @AllowNull(false)
  @Column(DataType.INTEGER)
  completeTime: number

  @AllowNull(false)
  @Column(DataType.DATE)
  createdAt: Date

  @AllowNull(false)
  @Column(DataType.DATE)
  updatedAt: Date

  @AllowNull(true)
  @Column(DataType.DATE)
  deletedAt: Date

  // * Association between User and Project
  @BelongsTo(() => User, 'projectContribute')
  user: User
}
