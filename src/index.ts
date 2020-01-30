import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import Router from './routes/indexRoutes'
import mongoose, { mongo } from 'mongoose'
import * as mongodb from 'mongodb'
import * as dotenv from "dotenv"
import compression from 'compression'
import cors from 'cors'
dotenv.config();

class Server{
    public app: express.Application

    constructor(){
        this.app = express()
        this.config()
        this.routes()
    }

    db(dbName: string, dbCollectionName: string){
        const MongoClient = require('mongodb').MongoClient
        const uri = process.env.CONNECTION_URL
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        this.connectDB(client, dbName, dbCollectionName)
    }

    async connectDB(client: mongodb.MongoClient, dbName: string, dbCollectionName: string){
        try {
            await client.connect(err => {
                
                const collection = client.db(dbName).collection(dbCollectionName)
                collection.find().toArray((error: mongodb.MongoError, result: object[]) => {
                    if(error) {
                        throw error
                    }
                    console.log(result)
                    console.log("[MongoDB connection] SUCCESS")
                });
    
                client.close()
            })
        } catch (error) {
            console.log('Error ocurred while connecting to MongoDB Atlas', error)
        }
    }

    config(){
        this.db('api-pokemon', 'pokemon')
        this.app.set('port', process.env.PORT || 3000)
        this.app.use(morgan('dev'))
        this.app.use(express.json())
        this.app.use(helmet())
        this.app.use(compression())
        this.app.use(cors())
    }

    routes(){
        this.app.use(Router)
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