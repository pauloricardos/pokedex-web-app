import {  http } from 'msw';
import { retrievePokemons } from './retrievePokemons';

export const handlers = [
  http.get('http://localhost:3001/api/v1/pokemons', () => {
    console.log('Captured a "GET /pokemons" request');
    retrievePokemons();
  }),
];
