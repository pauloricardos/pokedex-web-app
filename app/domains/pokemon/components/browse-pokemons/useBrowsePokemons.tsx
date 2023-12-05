import { type Fetcher, useAsyncValue, useFetcher } from '@remix-run/react';
import { useState, useEffect } from 'react';
import type { PaginatedPokemons, Pokemon } from '../../types';
import type { PaginationParams, UseBrowsePokemonsResult, UseFetcherResult } from './types';

export const useBrowsePokemons = (): UseBrowsePokemonsResult => {
  const paginatedPokemons = useAsyncValue() as PaginatedPokemons;
  const fetcher = useFetcher<UseFetcherResult>();

  const [pokemons, setPokemons] = useState<Pokemon[]>(
    paginatedPokemons.pokemons
  );

  useEffect(() => {
    if (!fetcher.data || fetcher.state === 'loading') {
      return;
    }

    if (fetcher.data) {
      const newPokemons = fetcher.data.result.pokemons;

      setPokemons(newPokemons);
    }
  }, [fetcher.data, fetcher.state, pokemons]);

  const loadNext = () => {
    const query = mountQuery(fetcher)
    fetcher.load(query);
  };

  const mountQuery = (fetcher: Fetcher) => {
    const { page, pageSize } = getPageParams(fetcher);

    return `?index&pageSize=${String(pageSize)}&page=${String(page)}`;
  }

  const getPageParams = (fetcher: Fetcher): PaginationParams => {
    const pageSize = fetcher.data
      ? Number(fetcher.data.result.pagination.pageSize) + 200
      : Number(paginatedPokemons.pagination.pageSize) + 200;

    const page = fetcher.data
    ? Number(fetcher.data.result.pagination.pageSize)
    : Number(paginatedPokemons.pagination.pageSize);

    return { page, pageSize };
  };

  return { pokemons, loadNext, fetcher };
};
