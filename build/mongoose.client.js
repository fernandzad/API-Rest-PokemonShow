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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config;
const mongoose_1 = __importDefault(require("mongoose"));
//const mongoose = require('mongoose')
const { DB_NAME, DB_COLLECTION, CONNECTION_URL, } = process.env;
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        if (CONNECTION_URL !== undefined && DB_NAME !== undefined && DB_COLLECTION !== undefined) {
            mongoose_1.default.set('useFindAndModify', false);
            mongoose_1.default.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
            const database = mongoose_1.default.connection;
            //console.table(database.collections)
            database.on('error', (error) => {
                console.log(error);
            });
            database.once('open', () => { console.log('[MongoDB (mongoose) connection]: SUCCESS'); });
            // database.useDb(DB_NAME).collection(DB_COLLECTION)
        }
        else {
            console.log('The connection string is not valid');
        }
    });
}
module.exports = connect;
