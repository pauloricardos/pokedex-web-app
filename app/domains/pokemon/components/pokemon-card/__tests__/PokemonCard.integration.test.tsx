import { describe, expect, it } from 'vitest';
import { render, screen } from '~/tests/helpers/test-utils';
import { PokemonCard } from '../PokemonCard';
import { generatePokemon } from '~/tests/helpers/generators';

describe('PokemonCard', () => {
  const bulbasaur = generatePokemon();

  describe('given a pokemon is being rendered', () => {
    describe('when renders the pokemon', () => {
      it('then renders the pokemon name with the first letter capitalized', () => {
        render(<PokemonCard pokemon={bulbasaur} />);

        expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
      });

      it('then renders the formatted pokedex entry', () => {
        render(<PokemonCard pokemon={bulbasaur} />);

        expect(screen.getByText('0001')).toBeInTheDocument();
      });
    });

    describe('when renders the pokemon with double type', () => {
      it('then renders the pokemon types', () => {
        render(<PokemonCard pokemon={bulbasaur} />);

        expect(screen.getByText('Grass')).toBeInTheDocument();
        expect(screen.getByText('Poison')).toBeInTheDocument();
      });

      it('then renders the pokemon primary type', () => {
        render(<PokemonCard pokemon={bulbasaur} />);

        expect(
          screen.getByRole('img', {
            name: /grass-type icon/i,
          })
        );
      });
    });
  });
});
