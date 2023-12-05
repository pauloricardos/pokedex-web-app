import type { PokemonType } from '../enums/PokemonTypes';

export const findPokemonPrimaryType = (
  pokemonTypes: Array<PokemonType>
): PokemonType => pokemonTypes[0];
