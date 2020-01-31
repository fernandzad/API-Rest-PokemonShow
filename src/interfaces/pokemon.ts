import IWeakness from './weakness'

interface IPokemon{
    name: string,
    type: string,
    number: number,
    weight: string,
    height: string,
    evolution: string,
    weaknesses: IWeakness
}

export default Pokemon