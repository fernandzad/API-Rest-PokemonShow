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
const GetPokemonByNumber = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params } = req;
        let numberInDex = parseInt(params.id);
        const pokemon = yield Pokemon.find({ number: numberInDex });
        console.log(pokemon);
        res.send(pokemon);
    }
    catch (error) {
    }
});
module.exports = {
    IndexPage,
    GetPokemonByNumber
};
