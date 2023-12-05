import { describe, vi, it, beforeEach, expect } from 'vitest';
import type { AxiosResponse } from 'axios';
import HttpClient from '../httpClient';
import axios from 'axios';

vi.mock('axios');

describe('HttpClient', async () => {
  const axiosMocked = vi.mocked(axios, true);

  const api = new HttpClient();

  describe('GET', () => {
    describe('when the request is successful', () => {
      beforeEach(() => {
        axiosMocked.get.mockResolvedValueOnce({
          data: {
            id: 1,
            title: 'test',
            completed: false,
          },
        });
      });

      it('then calls the api successfully', async () => {
        await api.get('/fake-pokemons/1');

        expect(axiosMocked.get).toHaveBeenCalledWith(
          expect.stringContaining(`/fake-pokemons/1`),
          {}
        );
      });

      it('then returns the data', async () => {
        const result: AxiosResponse = await api.get('/fake-pokemons/1', {});

        expect(result).toStrictEqual({
          id: 1,
          title: 'test',
          completed: false,
        });
      });
    });
  });

  describe('POST', () => {
    describe('when the request is successful', () => {
      beforeEach(() => {
        axiosMocked.post.mockResolvedValueOnce({
          data: {
            id: 1,
            title: 'test',
            completed: false,
          },
        });
      });

      it('then calls the api successfully', async () => {
        const payload = { title: 'test', completed: false };

        await api.post('/fake-pokemons/1', payload);

        expect(axiosMocked.post).toHaveBeenCalledWith(
          expect.stringContaining(`/fake-pokemons/1`),
          payload,
          {}
        );
      });

      it('then returns the data', async () => {
        const payload = { title: 'test', completed: false };

        const result: AxiosResponse = await api.post('/fake-pokemons', payload);

        expect(result).toStrictEqual({
          id: 1,
          title: 'test',
          completed: false,
        });
      });
    });
  });
});
