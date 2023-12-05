import { describe, expect, it } from 'vitest';
import { formatPokedexEntry } from '../formatPokedexEntry';

describe('formatPokedexEntry', () => {
  it.each([
    [1, '0001'],
    [100, '0100'],
    [1000, '1000'],
  ])('formats the pokedex entry for %d', (pokedexEntry, expectedPokedexEntry) => {
    expect(formatPokedexEntry(pokedexEntry)).toBe(expectedPokedexEntry);
  });
});
