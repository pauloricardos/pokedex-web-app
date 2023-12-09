import type { PokemonType } from './enums/PokemonTypes';

export type Pokemon = {
  id: number;
  pokedexEntry: number;
  name: string;
  spriteUrl: string;
  types: Array<PokemonType>;
};

export type Pokemons = Array<Pokemon>;

export type FindAllPokemonsParams = {
  pageSize: number;
};

export type FindAllPokemonsParamsResult = FindAllPokemonsParams & {
  hasNext: boolean;
};

export type PaginatedPokemons = {
  pokemons: Pokemons,
  pagination: FindAllPokemonsParamsResult;
};
