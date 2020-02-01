import IEndpoint from '../interfaces/endpoint'
const {
    IndexPage,
    GetPokemonByNumber,
    PostPokemon, 
    GetAllPokemon
} = require('./Pokemon/controller')

const endpoints: IEndpoint = {
    name: 'pokemon',
    endpoints: [
        {
            path: '',
            method: 'get',
            handler: GetAllPokemon
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
            path: '',
            method: 'post',
            handler: PostPokemon
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
}

module.exports = endpoints