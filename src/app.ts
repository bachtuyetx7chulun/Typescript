import express, { Application } from 'express'
import morgan from 'morgan'
import { PORT } from './configs'
import { GetError, HandleError } from './middleware/error.middleware'
import apiRouter from './routers'
import bodyParser from 'body-parser'

export class App {
  private app: Application
  constructor(private port?: number | string) {
    this.app = express()
    this.configure()
    this.api()
    this.handleError()
  }

  private api(): void {
    this.app.use('/api/v1', apiRouter)
  }

  private configure(): void {
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.set('port', this.port || PORT || 5000)
    this.app.use(morgan('dev'))
  }

  private handleError(): void {
    this.app.use(GetError)
    this.app.use(HandleError)
  }

  public listen(): void {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server is running on port ${this.app.get('port')}`)
    })
  }
}
