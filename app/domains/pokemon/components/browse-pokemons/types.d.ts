import type { Fetcher } from '@remix-run/react';
import type { PaginatedPokemons, Pokemons } from '../../types';

export type BrowsePokemonsProps = {
  pokemons: Pokemons;
};

export type UseFetcherResult = {
  result: PaginatedPokemons;
};

export type UseBrowsePokemonsResult = {
  pokemons: Pokemons;
  loadNext: () => void;
  fetcher: Fetcher<UseFetcherResult>;
};

export type PaginationParams = {
  page: number;
  pageSize: number;
};
