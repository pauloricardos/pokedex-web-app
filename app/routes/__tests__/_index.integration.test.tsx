import { describe, expect, it } from 'vitest';
import { createRemixStub } from '@remix-run/testing';
import Index from '../_index';
import { defer } from '@remix-run/node';
import { retrievePokemons } from '~/api/services/retrievePokemons.server';
import { render, screen, waitFor } from '~/tests/helpers/test-utils';

describe('Pokedex index page', () => {
  describe('when enters the app', () => {
    const PokedexPage = createRemixStub([
      {
        path: '/',
        Component: Index,
        loader() {
          return defer({
            data: retrievePokemons({ page: '0', pageSize: '53' }),
          });
        },
      },
    ]);

    it.each([
      'Bulbasaur',
      'Charmander',
      'Squirtle',
      'Charizard',
      'Dugtrio',
      'Blastoise',
      'Meowth',
    ])('renders the Pokemon with name %s', async (pokemonName) => {
      render(<PokedexPage />);

      waitFor(() => {
        const renderedPokemon = screen.getByText(pokemonName);

        expect(renderedPokemon).toBeInTheDocument();
      });
    });
  });
});
