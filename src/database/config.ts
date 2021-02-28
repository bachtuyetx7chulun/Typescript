import { Options } from 'sequelize'

function getOptions(prefix: string, additionalOption?: any): Options {
  return {
    database: process.env[`${prefix}_DB_DATABASE`],
    port: Number.parseInt(process.env[`${prefix}_DB_PORT`] || '5432', 10),
    host: process.env[`${prefix}_DB_HOST`],
    username: process.env[`${prefix}_DB_USERNAME`],
    password: process.env[`${prefix}_DB_PASSWORD`],
    dialect: 'postgres',
    logging:
      process.env[`${prefix}_DB_LOGGING`] === 'true' ? console.log : false,
    ...additionalOption,
  }
}


export { getOptions }
