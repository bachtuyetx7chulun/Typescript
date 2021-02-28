import express, { Express } from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { sequelize } from './database/connection'
import apiRoute from './routers/index.router'
import endPoints from 'express-list-endpoints'

const app: Express = express()
app.use('/', apiRoute)

app.listen(5000, async () => {
  console.log(`Environment: ${process.env.NODE_ENV || 'Development'}`)
  console.log(endPoints(app))

  console.log(`Server is running on port 5000`)
  try {
    await sequelize.authenticate()
    await sequelize.sync({ force: true })

    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
})
