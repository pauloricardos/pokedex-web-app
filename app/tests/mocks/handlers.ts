import {  http } from 'msw';
import { retrievePokemons } from './retrievePokemons';

export const handlers = [
  http.get('*/pokemons', () => {
    console.log('Captured a "GET /pokemons" request');
    retrievePokemons();
  }),
];
