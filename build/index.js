"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(compression());
app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Headers", 'Authorization, Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
});
db();
app.use('/api', routes);
const port = app.get('port');
app.listen(port, () => {
    console.log(`Server listening at port: ${port}`);
});
