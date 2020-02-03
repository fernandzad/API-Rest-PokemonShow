require('dotenv').config
import mongoose, { Schema } from 'mongoose'
//const mongoose = require('mongoose')

const {
    DB_NAME,
    DB_COLLECTION,
    CONNECTION_URL,
} = process.env

async function connect(){
    if(CONNECTION_URL !== undefined){
        //mongoose.set('useFindAndModify', false);
        mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        const database = mongoose.connection

        //console.table(database.collections)

        database.on('error', (error) => {
            console.log(error)
        })
        database.once('open', () => { console.log('[MongoDB (mongoose) connection]: SUCCESS') })
        // database.useDb(DB_NAME).collection(DB_COLLECTION)
    }else{
        console.log('The connection string is not valid')
    }
}

module.exports = connect