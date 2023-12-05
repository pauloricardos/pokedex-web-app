import type { FindAllPokemonsParams, PaginatedPokemons } from '~/domains/pokemon/types';
import HttpClient from '~/api/httpClient';

export const retrievePokemons = async ({
  page,
  pageSize,
}: FindAllPokemonsParams): Promise<PaginatedPokemons> => {
  const httpClient = new HttpClient();

  const response: PaginatedPokemons = await httpClient.get('/v1/pokemons', {
    params: {
      page,
      pageSize,
    },
  });

  return response;
};
