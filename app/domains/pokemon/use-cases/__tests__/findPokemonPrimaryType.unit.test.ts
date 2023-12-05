import { describe, it, expect } from 'vitest';
import { findPokemonPrimaryType } from '../findPokemonPrimaryType';
import { PokemonType } from '../../enums/PokemonTypes';

describe('when receives a pokemon', () => {
  it('then returns the primary type of the pokemon', () => {
    const pokemonTypes = [PokemonType.Grass, PokemonType.Poison]

    expect(findPokemonPrimaryType(pokemonTypes)).toBe(PokemonType.Grass);
  })
})