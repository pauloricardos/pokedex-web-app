import { PokemonType } from '~/domains/pokemon/enums/PokemonTypes';
import type {
  FindAllPokemonsParams,
  PaginatedPokemons,
  Pokemon,
  FindAllPokemonsParamsResult,
} from '~/domains/pokemon/types';

export const generatePokemon = (values: Partial<Pokemon> = {}): Pokemon => {
  const baseValues: Pokemon = {
    id: 1,
    pokedexEntry: 1,
    name: 'bulbasaur',
    spriteUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    types: [PokemonType.Grass, PokemonType.Poison],
  };

  return { ...baseValues, ...values };
};

export const generateFindAllParams = (
  values: Partial<FindAllPokemonsParams> = {}
): FindAllPokemonsParams => {
  const baseValues: FindAllPokemonsParams = {
    pageSize: 151,
  };

  return { ...baseValues, ...values };
};

export const generateFindAllPokemonsParamsResult = (
  values: Partial<FindAllPokemonsParamsResult> = {}
): FindAllPokemonsParamsResult => {
  const baseValues: FindAllPokemonsParamsResult = {
    pageSize: 151,
    hasNext: false,
  };

  return { ...baseValues, ...values };
};

export const generatePaginatedPokemons = (
  values: Partial<PaginatedPokemons> = {}
): PaginatedPokemons => {
  const baseValues: PaginatedPokemons = {
    pokemons: [generatePokemon()],
    pagination: generateFindAllPokemonsParamsResult(),
  };

  return { ...baseValues, ...values };
};
