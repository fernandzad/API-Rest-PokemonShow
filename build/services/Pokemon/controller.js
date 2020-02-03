"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pokemon = require('../../models/pokemon');
const IndexPage = (req, res) => {
    const { body } = req;
    // console.log(body)
    res.send('Probando, probando... Uno, dos, tres...');
};
const GetAllPokemon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pokemon = yield Pokemon.find();
        console.table(pokemon);
        res.send(pokemon);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
const GetPokemonByNumber = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params } = req;
        let numberInDex = params.id;
        const pokemon = yield Pokemon.find({ number: numberInDex });
        if (pokemon !== undefined) {
            console.table(pokemon);
            res.send(pokemon);
        }
        else {
            console.log(`Pokemon with id: ${numberInDex} not found`);
            res.send(pokemon);
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
const GetPokemonByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params } = req;
        const nameInDex = params.name;
        const pokemon = yield Pokemon.find({ name: nameInDex }).exec();
        if (pokemon !== undefined) {
            console.log(pokemon);
            res.send(pokemon);
        }
        else {
            console.log(`Pokemon with name: ${nameInDex} not found`);
            res.send(pokemon);
        }
    }
    catch (error) {
        res.status(500).json({ messag: error.message });
    }
});
const PostPokemon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const poke = new Pokemon({
        "name": "Gengar",
        "type": "Ghost",
        "number": '94',
        "weight": "40.5",
        "height": "1.5",
        "evolution": "Sin evolucion",
        "weaknesses": ["Ghost", "Synister", " Psychic"],
        "image": "https://vignette.wikia.nocookie.net/pokemonreloaded/images/f/f8/Gengar.png/revision/latest/scale-to-width-down/340?cb=20140809002539&path-prefix=es"
    });
    try {
        const new_poke = yield poke.save();
        res.status(201).json(new_poke);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
const RemovePokemonByNumber = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { params } = req;
    try {
        const numberInDex = params.id;
        const response = yield Pokemon.find({ number: numberInDex }).deleteOne().exec();
        if (response > 0) {
            console.log(`Pokemon with number: ${numberInDex} deleted`);
            res.send(response);
        }
        else {
            console.log('The Pokemon was not found');
            res.send(response);
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = {
    IndexPage,
    GetPokemonByNumber,
    PostPokemon,
    GetAllPokemon,
    GetPokemonByName,
    RemovePokemonByNumber,
};
