require('dotenv').config
import mongoose, { Schema } from 'mongoose'
//const mongoose = require('mongoose')

const {
    DB_NAME,
    DB_COLLECTION,
    CONNECTION_URL,
} = process.env

function connect(){
    if(CONNECTION_URL !== undefined){
        mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        const db = mongoose.connection
        db.on('error', (error) => {
            console.log(error)
        })
        db.once('open', () => { console.log('[MongoDB (mongoose) connection]: SUCCESS') })
    }else{
        console.log('The connection string is not valid')
    }
}

module.exports = connect