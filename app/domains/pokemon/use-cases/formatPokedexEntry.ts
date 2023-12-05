export const formatPokedexEntry = (number: number): string => {
  const pokedexEntry: string = number.toString();
  const pokedexEntrySize: number = pokedexEntry.length;

  const numZeros: number = Math.max(0, 4 - pokedexEntrySize);

  const maskedPokedexEntry: string = pokedexEntry.padStart(numZeros + pokedexEntrySize, '0');

  return maskedPokedexEntry;
}
