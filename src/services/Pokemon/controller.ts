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
        
        let numberInDex: string = params.id
        const pokemon: IPokemon = await Pokemon.find({ number: numberInDex })
        if(pokemon !== undefined){
            console.table(pokemon)
            res.send(pokemon)
        }else{
            console.log(`Pokemon with id: ${numberInDex} not found`)
            res.send(pokemon)
        }
        
    }catch(error) {
        res.status(500).json({ message: error.message })
    }
}
const GetPokemonByName = async (req: Request, res: Response) => {
    try {
        
        const {
            params
        } = req

        const nameInDex: string = params.name
        const pokemon: IPokemon = await Pokemon.find({name: nameInDex }).exec()
        if (pokemon !== undefined) {
            console.log(pokemon)
            res.send(pokemon)
        } else {
            console.log(`Pokemon with name: ${nameInDex} not found`)
            res.send(pokemon)
        }
    } catch (error) {
        res.status(500).json({ messag: error.message })
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

const RemovePokemonByNumber = async (req: Request, res: Response) => {
    const {
        params
    } = req
    try {
        const numberInDex = params.id
        const response = await Pokemon.find({ number: numberInDex }).deleteOne().exec()
        if(response > 0){
            console.log(`Pokemon with number: ${numberInDex} deleted`)
            res.send(response)
        }else{
            console.log('The Pokemon was not found')
            res.send(response)
        }
    } 
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    IndexPage,
    GetPokemonByNumber,
    PostPokemon,
    GetAllPokemon,
    GetPokemonByName,
    RemovePokemonByNumber,
}

