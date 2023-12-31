import { type Fetcher, useAsyncValue, useFetcher } from '@remix-run/react';
import { useState, useEffect } from 'react';
import type { PaginatedPokemons, Pokemon } from '../../types';
import type { UseBrowsePokemonsResult, UseFetcherResult } from './types';
import { isNil } from 'ramda';

const pokemonsToFetch = 300;

export const useBrowsePokemons = (): UseBrowsePokemonsResult => {
  const paginatedPokemons = useAsyncValue() as PaginatedPokemons;
  const fetcher = useFetcher<UseFetcherResult>();

  const [pokemons, setPokemons] = useState<Pokemon[]>(
    paginatedPokemons.pokemons
  );

  const fetcherHasMorePokemonToFetch = fetcher.data?.result.pagination.hasNext;
  const hasMorePokemonToFetch = paginatedPokemons.pagination.hasNext;

  const isLoading = fetcher.state === 'loading';

  useEffect(() => {
    if (!fetcher.data || isLoading) {
      return;
    }

    if (fetcher.data.result.pokemons.length) {
      const newPokemons = fetcher.data.result.pokemons;

      setPokemons(newPokemons);
    }
  }, [fetcher.data, isLoading, pokemons]);

  const loadNext = () => {
    const query = mountQuery(fetcher);

    if (
      (fetcherHasMorePokemonToFetch || isNil(fetcherHasMorePokemonToFetch)) &&
      hasMorePokemonToFetch
    ) {
      fetcher.load(query);
    }
  };

  const mountQuery = (fetcher: Fetcher) => {
    const pageSize = getPageSizeParams(fetcher);

    return `?index&pageSize=${pageSize}`;
  };

  const getPageSizeParams = (fetcher: Fetcher): number => {
    const pageSize = fetcher.data
      ? fetcher.data.result.pagination.pageSize + pokemonsToFetch
      : paginatedPokemons.pagination.pageSize + pokemonsToFetch;

    return pageSize;
  };

  return { pokemons, loadNext, isLoading };
};
