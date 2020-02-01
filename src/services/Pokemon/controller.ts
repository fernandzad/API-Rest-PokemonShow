import { Request, Response, NextFunction } from 'express';
import IPokemon from '../../interfaces/pokemon'
const Pokemon = require('../../models/pokemon')

const IndexPage = (req: Request, res: Response) => {
    const { body } = req
    // console.log(body)
    res.send('Probando, probando... Uno, dos, tres...')
}

const GetAllPokemon = async (req: Request, res: Response) => {
    try {
        const pokemon: IPokemon = await Pokemon.find()
        console.table(pokemon)
        res.send(pokemon)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const GetPokemonByNumber = async (req: Request, res: Response) => {
    try{
        const {
            params
        } = req
        
        let numberInDex = params.id
        const pokemon: IPokemon = await Pokemon.find({ number: numberInDex })
        console.table(pokemon)
        res.send(pokemon)
    }catch(error) {
        res.status(500).json({ message: error.message })
    }
}

const PostPokemon = async (req: Request, res: Response) => {
    const poke = new Pokemon({
        "name":"Gengar",
        "type":"Ghost",
        "number":'94',
        "weight":"40.5",
        "height":"1.5",
        "evolution":"Sin evolucion",
        "weaknesses":["Ghost","Synister"," Psychic"],
        "image":"https://vignette.wikia.nocookie.net/pokemonreloaded/images/f/f8/Gengar.png/revision/latest/scale-to-width-down/340?cb=20140809002539&path-prefix=es"
    })
    try {
        const new_poke = await poke.save()
        res.status(201).json(new_poke)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}

module.exports = {
    IndexPage,
    GetPokemonByNumber,
    PostPokemon,
    GetAllPokemon
}