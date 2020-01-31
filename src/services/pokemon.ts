import IEndpoint from '../interfaces/endpoint'

const endpoints: IEndpoint = {
    name: 'pokemon',
    endpoints: [
        {
            path: '',
            method: 'get'
        },
        {
            path: 'number',
            method: 'get'
        },
        {
            path: 'name',
            method: 'get'
        },
    ]
}

module.exports = endpoints