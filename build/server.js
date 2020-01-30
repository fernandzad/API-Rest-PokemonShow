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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const dotenv = __importStar(require("dotenv"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
dotenv.config();
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    db(dbName, dbCollectionName) {
        const MongoClient = require('mongodb').MongoClient;
        const uri = process.env.CONNECTION_URL;
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        this.connectDB(client, dbName, dbCollectionName);
    }
    connectDB(client, dbName, dbCollectionName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield client.connect(err => {
                    const collection = client.db(dbName).collection(dbCollectionName);
                    collection.find().toArray((error, result) => {
                        if (error) {
                            throw error;
                        }
                        console.log(result);
                        console.log("[MongoDB connection] SUCCESS");
                    });
                    client.close();
                });
            }
            catch (error) {
                console.log('Error ocurred while connecting to MongoDB Atlas', error);
            }
        });
    }
    config() {
        // const MONGO_URI = 'mongodb://localhost/apipokemon'
        // mongoose.set('useFindAndModify', true)
        // mongoose.connect(MONGO_URI, {
        //     useNewUrlParser: true,
        //     useCreateIndex: true,
        //     useUnifiedTopology: true
        // })
        this.db('api-pokemon', 'pokemon');
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.json());
        this.app.use(helmet_1.default());
        this.app.use(compression_1.default());
        this.app.use(cors_1.default());
    }
    routes() {
        this.app.use(indexRoutes_1.default);
    }
    start() {
        const port = this.app.get('port');
        this.app.listen(port, () => {
            console.log(`Server listening in port: ${port}`);
        });
    }
}
const server = new Server();
server.start();
