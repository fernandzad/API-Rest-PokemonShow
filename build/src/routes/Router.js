"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class Routes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', (req, res) => {
            res.send('Root');
        });
    }
}
const handler = new Routes();
// indexRoutes.routes()
exports.default = handler.router;
