"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config;
const mongoose_1 = __importDefault(require("mongoose"));
//const mongoose = require('mongoose')
const { DB_NAME, DB_COLLECTION, CONNECTION_URL, } = process.env;
function connect() {
    if (CONNECTION_URL !== undefined) {
        mongoose_1.default.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = mongoose_1.default.connection;
        db.on('error', (error) => {
            console.log(error);
        });
        db.once('open', () => { console.log('[MongoDB (mongoose) connection]: SUCCESS'); });
    }
    else {
        console.log('The connection string is not valid');
    }
}
module.exports = connect;
