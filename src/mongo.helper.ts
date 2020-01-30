import * as mongodb from 'mongodb'

function initialize(dbName: string, dbCollectionName: string){
    const MongoClient = require('mongodb').MongoClient
    const uri = process.env.CONNECTION_URL
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    connectDB(client, dbName, dbCollectionName)
}

async function connectDB(client: mongodb.MongoClient, dbName: string, dbCollectionName: string){
    try {
        await client.connect()
        const collection = client.db(dbName).collection(dbCollectionName)
            collection.find().toArray((error: mongodb.MongoError, result: object[]) => {
                if(error) {
                    throw error
                }
                console.log(result)
                console.log("[MongoDB connection] SUCCESS")
            });

            client.close()          
    } catch (error) {
        console.log('Error ocurred while connecting to MongoDB Atlas', error)
    }
}

module.exports = {
    initialize
}