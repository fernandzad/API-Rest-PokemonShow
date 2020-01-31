"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
dotenv.config();
function initialize() {
    const { DB_NAME, DB_COLLECTION } = process.env;
    const MongoClient = require('mongodb').MongoClient;
    const uri = process.env.CONNECTION_URL;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    connectDB(client, DB_NAME, DB_COLLECTION);
}
function connectDB(client, dbName, dbCollectionName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const collection = client.db(dbName).collection(dbCollectionName);
            collection.find().toArray((error, result) => {
                if (error) {
                    throw error;
                }
                console.log(result);
                console.log("[MongoDB connection] SUCCESS");
            });
            client.close();
        }
        catch (error) {
            console.log('Error ocurred while connecting to MongoDB Atlas', error);
        }
    });
}
module.exports = {
    initialize
};
