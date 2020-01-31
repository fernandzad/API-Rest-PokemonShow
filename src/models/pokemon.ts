import { Schema, model } from 'mongoose'

const pokemonSchema = new Schema({
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
        // default: Date.now
    },
})

module.exports = model('Pokemon', pokemonSchema)