import { Request, Response, NextFunction } from "express";

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const routes = require('./routes/Router');
const compression = require('compression');
const cors = require('cors');
const db = require('./mongoose.client');
const app = express();


app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded( { extended: false } ));
app.use(helmet());
app.use(compression());
app.use(cors());
app.use((req: Request, res: Response, next: NextFunction) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.header("Access-Control-Allow-Headers", 'Authorization, Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
    
    next();
});
db();
app.use('/api', routes);

const port: string = app.get('port')
app.listen(port, () => {
    console.log(`Server listening at port: ${port}`)
})
