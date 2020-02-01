import { ObjectId } from "mongodb"

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Pokemon = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    number: {
        type: String,
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
        required: false
    },
    image: {
        type: String,
        required: true,
        // default: Date.now
    },
})

const collection = 'pokemon'
module.exports = mongoose.model('Pokemon', Pokemon, collection)