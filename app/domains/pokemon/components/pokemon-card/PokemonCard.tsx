import { PokemonTypes } from '../pokemon-types/PokemonTypes';
import * as useCase from '~/domains/pokemon/use-cases';
import type { PokemonCardProps } from './types';

export const PokemonCard = ({ pokemon }: PokemonCardProps): JSX.Element => {
  const pokemonPrimaryType = useCase.findPokemonPrimaryType(pokemon.types);
  const pokemonName = useCase.capitalizePokemonFirstLetter(pokemon.name);
  const pokedexEntry = useCase.formatPokedexEntry(pokemon.pokedexEntry);

  return (
    <div
      className={`w-80 flex bg-${pokemonPrimaryType}-type-secondary rounded-2xl shadow-lg`}
    >
      <div
        className={`w-full bg-${pokemonPrimaryType}-type-secondary rounded-tl-xl rounded-bl-xl p-2 flex flex-col`}
      >
        <p className="text-xs font-semibold text-black-gray-scale">
          {pokedexEntry}
        </p>
        <p className="text-xl font-semibold text-black-gray-scale mb-3">
          {pokemonName}
        </p>
        <PokemonTypes pokemonTypes={pokemon.types} />
      </div>
      <div
        className={`p-3 flex justify-center items-start bg-${pokemonPrimaryType}-type rounded-xl`}
      >
        <div className="flex relative right-3">
          <img
            src={`/images/${pokemonPrimaryType}-type-outline.png`}
            className={`bg-${pokemonPrimaryType}-type relative left-5`}
            alt={`${pokemonPrimaryType}-type icon`}
          />
          <img
            src={pokemon.spriteUrl}
            className="relative right-20 w-24"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
