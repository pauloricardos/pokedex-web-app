export const capitalizePokemonFirstLetter = (pokemonName: string): string =>
  pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
