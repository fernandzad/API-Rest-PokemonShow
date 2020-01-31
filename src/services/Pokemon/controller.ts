import { Request, Response, NextFunction } from 'express';
const Pokemon = require('../../models/pokemon')

const IndexPage = (req: Request, res: Response) => {
    const { body } = req
    // console.log(body)
    res.send('Probando, probando... Uno, dos, tres...')
}

const GetPokemonByNumber = async (req: Request, res: Response) => {
    try{
        const {
            params
        } = req
        
        let numberInDex = parseInt(params.id)
        const pokemon = await Pokemon.find({ number: numberInDex })
        console.log(pokemon)
        res.send(pokemon)
    }catch(error) {

    }
}

module.exports = {
    IndexPage,
    GetPokemonByNumber
}