import mysql, { Pool } from 'mysql2'
import {
  DATABASE_USER,
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
} from '../configs'

export const connect = (): Pool => {
  const pool = mysql.createPool({
    host: DATABASE_HOST,
    user: DATABASE_USER,
    database: DATABASE_NAME,
    port: +DATABASE_PORT,
    connectionLimit: 100,
    multipleStatements: true,
  })

  return pool
  // query database using promises
  //   const [rows, fields] = await promisePool.query('SELECT 1')
  //   console.log(fields)
}
