import { describe, expect, it } from 'vitest';
import { capitalizePokemonFirstLetter } from '../capitalizePokemonFirstLetter';

describe('capitalizePokemonFirstLetter', () => {
  describe('when receives a pokemon name', () => {
    it('then returns the pokemon name with the first letter capitalized', () => {
      const pokemonName = 'pikachu';
      const expectedPokemonName = 'Pikachu';

      expect(capitalizePokemonFirstLetter(pokemonName)).toBe(expectedPokemonName);
    })
  })
})