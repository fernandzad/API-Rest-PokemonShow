"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { IndexPage, GetPokemonByNumber } = require('./Pokemon/controller');
const endpoints = {
    name: 'pokemon',
    endpoints: [
        {
            path: '',
            method: 'get',
            handler: IndexPage
        },
        {
            path: 'number/:id',
            method: 'get',
            handler: GetPokemonByNumber
        },
        {
            path: 'name/:name',
            method: 'get',
            handler: IndexPage
        },
        {
            path: 'number/:id',
            method: 'post',
            handler: IndexPage
        },
        {
            path: 'name/:name',
            method: 'post',
            handler: IndexPage
        },
        {
            path: 'number/:id',
            method: 'delete',
            handler: IndexPage
        },
    ]
};
module.exports = endpoints;
