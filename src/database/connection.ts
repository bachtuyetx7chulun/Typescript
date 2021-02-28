import { Sequelize } from 'sequelize-typescript'
import { getOptions } from './config'

export const sequelize = new Sequelize(
  getOptions('DEV', {
    models: [__dirname + '/models'],
  })
)
