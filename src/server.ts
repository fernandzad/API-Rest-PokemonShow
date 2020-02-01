import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import mongoose from 'mongoose'

import indexRoutes from './routes/indexRoutes'

class Server{
    public app: express.Application
    
    constructor(){
        this.app = express()
        this.config()
    }

    config(){
        this.app.set('port', process.env.PORT || 3000)
        this.app.use(morgan('dev'))
        this.app.use(helmet())
    }

    routes(){
        this.app.use(indexRoutes)
    }

    start(){
        const port: string = this.app.get('port')
        this.app.listen(port, () => {
            console.log(`Server listening in port: ${port}`)
        })
    }
}

const server = new Server()
server.start()