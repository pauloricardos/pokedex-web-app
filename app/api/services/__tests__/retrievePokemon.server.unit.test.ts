import { describe, it, vi, expect } from 'vitest';
import HttpClient from '~/api/httpClient';
import { retrievePokemons } from '../retrievePokemons.server';
import { generatePaginatedPokemons } from '~/tests/helpers/generators';

vi.mock('~/api/httpClient');

describe('retrievePokemons', () => {
  const httpClient = new HttpClient();
  const httpClientMocked = vi.mocked(httpClient, true);

  describe('when called with a pageSize', () => {
    it('then calls the httpClient', async () => {
      httpClientMocked.get.mockResolvedValueOnce(generatePaginatedPokemons());

      await retrievePokemons({ pageSize: 1 });

      expect(httpClientMocked.get).toHaveBeenCalledWith('/v1/pokemons', {
        params: {
          pageSize: 1,
        },
      });
    });

    describe('and an error is thrown', () => {
      it('then handles the error', async () => {
        httpClientMocked.get.mockRejectedValueOnce(new Error('Network Error'));

        await expect(retrievePokemons({ pageSize: 1 })).rejects.toThrowError(
          'Network Error'
        );
      });
    });
  });
});
