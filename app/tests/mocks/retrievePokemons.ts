import { HttpResponse, type StrictResponse } from 'msw';
import { PokemonType } from '~/domains/pokemon/enums/PokemonTypes';
import type { PaginatedPokemons } from '~/domains/pokemon/types';
import {
  generatePaginatedPokemons,
  generatePokemon,
  generateFindAllPokemonsParamsResult,
} from '../helpers/generators';

export const retrievePokemons = (): StrictResponse<PaginatedPokemons> => {
  return HttpResponse.json<PaginatedPokemons>(
    generatePaginatedPokemons({
      pokemons: [
        generatePokemon(),
        generatePokemon({
          id: 2,
          pokedexEntry: 2,
          name: 'ivysaur',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
          types: [PokemonType.Grass, PokemonType.Poison],
        }),
        generatePokemon({
          id: 3,
          pokedexEntry: 3,
          name: 'venusaur',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
          types: [PokemonType.Grass, PokemonType.Poison],
        }),
        generatePokemon({
          id: 4,
          pokedexEntry: 4,
          name: 'charmander',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
          types: [PokemonType.Fire],
        }),
        generatePokemon({
          id: 5,
          pokedexEntry: 5,
          name: 'charmeleon',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
          types: [PokemonType.Fire],
        }),
        generatePokemon({
          id: 6,
          pokedexEntry: 6,
          name: 'charizard',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
          types: [PokemonType.Fire, PokemonType.Flying],
        }),
        generatePokemon({
          id: 7,
          pokedexEntry: 7,
          name: 'squirtle',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
          types: [PokemonType.Water],
        }),
        generatePokemon({
          id: 8,
          pokedexEntry: 8,
          name: 'wartortle',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
          types: [PokemonType.Water],
        }),
        generatePokemon({
          id: 9,
          pokedexEntry: 9,
          name: 'blastoise',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
          types: [PokemonType.Water],
        }),
        generatePokemon({
          id: 10,
          pokedexEntry: 10,
          name: 'caterpie',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
          types: [PokemonType.Bug],
        }),
        generatePokemon({
          id: 11,
          pokedexEntry: 11,
          name: 'metapod',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
          types: [PokemonType.Bug],
        }),
        generatePokemon({
          id: 12,
          pokedexEntry: 12,
          name: 'butterfree',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
          types: [PokemonType.Bug, PokemonType.Flying],
        }),
        generatePokemon({
          id: 13,
          pokedexEntry: 13,
          name: 'weedle',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
          types: [PokemonType.Bug, PokemonType.Poison],
        }),
        generatePokemon({
          id: 14,
          pokedexEntry: 14,
          name: 'kakuna',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
          types: [PokemonType.Bug, PokemonType.Poison],
        }),
        generatePokemon({
          id: 15,
          pokedexEntry: 15,
          name: 'beedrill',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
          types: [PokemonType.Bug, PokemonType.Poison],
        }),
        generatePokemon({
          id: 16,
          pokedexEntry: 16,
          name: 'pidgey',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
          types: [PokemonType.Normal, PokemonType.Flying],
        }),
        generatePokemon({
          id: 17,
          pokedexEntry: 17,
          name: 'pidgeotto',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
          types: [PokemonType.Normal, PokemonType.Flying],
        }),
        generatePokemon({
          id: 18,
          pokedexEntry: 18,
          name: 'pidgeot',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
          types: [PokemonType.Normal, PokemonType.Flying],
        }),
        generatePokemon({
          id: 19,
          pokedexEntry: 19,
          name: 'rattata',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
          types: [PokemonType.Normal],
        }),
        generatePokemon({
          id: 20,
          pokedexEntry: 20,
          name: 'raticate',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png',
          types: [PokemonType.Normal],
        }),
        generatePokemon({
          id: 21,
          pokedexEntry: 21,
          name: 'spearow',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png',
          types: [PokemonType.Normal, PokemonType.Flying],
        }),
        generatePokemon({
          id: 22,
          pokedexEntry: 22,
          name: 'fearow',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png',
          types: [PokemonType.Normal, PokemonType.Flying],
        }),
        generatePokemon({
          id: 23,
          pokedexEntry: 23,
          name: 'ekans',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png',
          types: [PokemonType.Poison],
        }),
        generatePokemon({
          id: 24,
          pokedexEntry: 24,
          name: 'arbok',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png',
          types: [PokemonType.Poison],
        }),
        generatePokemon({
          id: 25,
          pokedexEntry: 25,
          name: 'pikachu',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
          types: [PokemonType.Electric],
        }),
        generatePokemon({
          id: 26,
          pokedexEntry: 26,
          name: 'raichu',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
          types: [PokemonType.Electric],
        }),
        generatePokemon({
          id: 27,
          pokedexEntry: 27,
          name: 'sandshrew',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png',
          types: [PokemonType.Ground],
        }),
        generatePokemon({
          id: 28,
          pokedexEntry: 28,
          name: 'sandslash',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png',
          types: [PokemonType.Ground],
        }),
        generatePokemon({
          id: 29,
          pokedexEntry: 29,
          name: 'nidoran-f',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png',
          types: [PokemonType.Poison],
        }),
        generatePokemon({
          id: 30,
          pokedexEntry: 30,
          name: 'nidorina',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png',
          types: [PokemonType.Poison],
        }),
        generatePokemon({
          id: 31,
          pokedexEntry: 31,
          name: 'nidoqueen',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png',
          types: [PokemonType.Poison, PokemonType.Ground],
        }),
        generatePokemon({
          id: 32,
          pokedexEntry: 32,
          name: 'nidoran-m',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png',
          types: [PokemonType.Poison],
        }),
        generatePokemon({
          id: 33,
          pokedexEntry: 33,
          name: 'nidorino',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png',
          types: [PokemonType.Poison],
        }),
        generatePokemon({
          id: 34,
          pokedexEntry: 34,
          name: 'nidoking',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png',
          types: [PokemonType.Poison, PokemonType.Ground],
        }),
        generatePokemon({
          id: 35,
          pokedexEntry: 35,
          name: 'clefairy',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png',
          types: [PokemonType.Fairy],
        }),
        generatePokemon({
          id: 36,
          pokedexEntry: 36,
          name: 'clefable',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png',
          types: [PokemonType.Fairy],
        }),
        generatePokemon({
          id: 37,
          pokedexEntry: 37,
          name: 'vulpix',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png',
          types: [PokemonType.Fire],
        }),
        generatePokemon({
          id: 38,
          pokedexEntry: 38,
          name: 'ninetales',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png',
          types: [PokemonType.Fire],
        }),
        generatePokemon({
          id: 39,
          pokedexEntry: 39,
          name: 'jigglypuff',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
          types: [PokemonType.Normal, PokemonType.Fairy],
        }),
        generatePokemon({
          id: 40,
          pokedexEntry: 40,
          name: 'wigglytuff',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png',
          types: [PokemonType.Normal, PokemonType.Fairy],
        }),
        generatePokemon({
          id: 41,
          pokedexEntry: 41,
          name: 'zubat',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png',
          types: [PokemonType.Poison, PokemonType.Flying],
        }),
        generatePokemon({
          id: 42,
          pokedexEntry: 42,
          name: 'golbat',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png',
          types: [PokemonType.Poison, PokemonType.Flying],
        }),
        generatePokemon({
          id: 43,
          pokedexEntry: 43,
          name: 'oddish',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png',
          types: [PokemonType.Grass, PokemonType.Poison],
        }),
        generatePokemon({
          id: 44,
          pokedexEntry: 44,
          name: 'gloom',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png',
          types: [PokemonType.Grass, PokemonType.Poison],
        }),
        generatePokemon({
          id: 45,
          pokedexEntry: 45,
          name: 'vileplume',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png',
          types: [PokemonType.Grass, PokemonType.Poison],
        }),
        generatePokemon({
          id: 46,
          pokedexEntry: 46,
          name: 'paras',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png',
          types: [PokemonType.Bug, PokemonType.Grass],
        }),
        generatePokemon({
          id: 47,
          pokedexEntry: 47,
          name: 'parasect',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png',
          types: [PokemonType.Bug, PokemonType.Grass],
        }),
        generatePokemon({
          id: 48,
          pokedexEntry: 48,
          name: 'venonat',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png',
          types: [PokemonType.Bug, PokemonType.Poison],
        }),
        generatePokemon({
          id: 49,
          pokedexEntry: 49,
          name: 'venomoth',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png',
          types: [PokemonType.Bug, PokemonType.Poison],
        }),
        generatePokemon({
          id: 50,
          pokedexEntry: 50,
          name: 'diglett',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png',
          types: [PokemonType.Ground],
        }),
        generatePokemon({
          id: 51,
          pokedexEntry: 51,
          name: 'dugtrio',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png',
          types: [PokemonType.Ground],
        }),
        generatePokemon({
          id: 52,
          pokedexEntry: 52,
          name: 'meowth',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png',
          types: [PokemonType.Normal],
        }),
        generatePokemon({
          id: 53,
          pokedexEntry: 53,
          name: 'persian',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png',
          types: [PokemonType.Normal],
        }),
      ],
      pagination: generateFindAllPokemonsParamsResult(),
    })
  );
};
