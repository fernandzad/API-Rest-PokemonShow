"use strict";
require('dotenv').config();
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');
const routes = require('./routes/Router');
const compression = require('compression');
const cors = require('cors');
const db = require('./mongo.client');
const app = express();
db.initialize();
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(helmet())
// app.use(compression())
// app.use(cors())
app.use('/', routes);
const port = app.get('port');
app.listen(port, () => {
    console.log(`Server listening at port: ${port}`);
});
