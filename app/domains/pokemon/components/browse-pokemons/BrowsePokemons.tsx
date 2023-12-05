import { type PropsWithChildren } from 'react';
import { PokemonCard } from '~/domains/pokemon/components/pokemon-card/PokemonCard';
import { SearchPokemonInput } from '../search-pokemon-input/SearchPokemonInput';
import type { Pokemon } from '~/domains/pokemon/types.d';
import { Footer } from '~/components/Footer';
import { InfiniteScroller } from '~/components';
import { useBrowsePokemons } from './useBrowsePokemons';

export const BrowsePokemons = (): JSX.Element => {
  const { pokemons, loadNext, fetcher } = useBrowsePokemons();

  return (
    <>
      <main className="w-full p-8 flex justify-center flex-col">
        <SearchPokemonInput />
        <InfiniteScroller
          loadNext={loadNext}
          loading={fetcher.state === 'loading'}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {pokemons.map((pokemon: Pokemon) => (
              <PokemonCardContainer key={pokemon.id}>
                <PokemonCard pokemon={pokemon} />
              </PokemonCardContainer>
            ))}
          </div>
        </InfiniteScroller>
      </main>
      <Footer />
    </>
  );
};

const PokemonCardContainer: React.FC<PropsWithChildren> = ({
  children,
}): JSX.Element => {
  return <div className="p-4">{children}</div>;
};
