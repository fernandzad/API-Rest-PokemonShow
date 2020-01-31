"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const pokemonSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    evolution: {
        type: String,
        required: true
    },
    weaknesses: {
        type: Array,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
});
module.exports = mongoose_1.model('Pokemon', pokemonSchema);
