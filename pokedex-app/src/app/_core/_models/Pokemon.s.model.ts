import { Pokemon } from "./Pokemon.model";

export interface Pokemons{
  count: number,
  next: null,
  previous: null,
  results: Pokemon[]
}
