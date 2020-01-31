"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const services = [
    require('../services/pokemon'),
];
services.forEach(service => {
    const { name, endpoints } = service;
    endpoints.forEach(endpoint => {
        const { path, method, handler } = endpoint;
        router[method](`/api/${name}/${path}`, handler);
    });
});
module.exports = router;
