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
  isLoading: boolean;
};

export type PaginationParams = {
  page: number;
  pageSize: number;
};
