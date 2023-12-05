import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'black-gray-scale': '#333',
      },
      height: {
        '26': '26%',
      },
      backgroundColor: {
        'bug-type': '#91C12F',
        'bug-type-secondary': '#DDEECF',
        'dark-type': '#5A5465',
        'dark-type-secondary': '#B0AEBB',
        'dragon-type': '#0B6DC3',
        'dragon-type-secondary': '#7CC2F5',
        'electric-type': '#F4D23C',
        'electric-type-secondary': '#FDF1B3',
        'fairy-type': '#EC8FE6',
        'fairy-type-secondary': '#FCC5F2',
        'fighting-type': '#CE416B',
        'fighting-type-secondary': '#F7AFC6',
        'fire-type': '#FF9D55',
        'fire-type-secondary': '#FFD9AF',
        'flying-type': '#89AAE3',
        'flying-type-secondary': '#CDDDF4',
        'ghost-type': '#5269AD',
        'ghost-type-secondary': '#A1B2CC',
        'grass-type': '#63BC5A',
        'grass-type-secondary': '#C5E1B8',
        'ground-type': '#D97845',
        'ground-type-secondary': '#F8E0C3',
        'ice-type': '#73CEC0',
        'ice-type-secondary': '#BCEEE1',
        'normal-type': '#919AA2',
        'normal-type-secondary': '#DDE3E8',
        'poison-type': '#B567CE',
        'poison-type-secondary': '#EAC4EB',
        'psychic-type': '#FA7179',
        'psychic-type-secondary': '#FDC0C4',
        'rock-type': '#C5B78C',
        'rock-type-secondary': '#EAE1D4',
        'steel-type': '#5A8EA2',
        'steel-type-secondary': '#B7CDD8',
        'water-type': '#5090D6',
        'water-type-secondary': '#B7D4ED',
      }      
    },
  },
  safelist: [
    'bg-bug-type',
    'bg-bug-type-secondary',
    'bg-dark-type',
    'bg-dark-type-secondary',
    'bg-dragon-type',
    'bg-dragon-type-secondary',
    'bg-electric-type',
    'bg-electric-type-secondary',
    'bg-fairy-type',
    'bg-fairy-type-secondary',
    'bg-fighting-type',
    'bg-fighting-type-secondary',
    'bg-fire-type',
    'bg-fire-type-secondary',
    'bg-flying-type',
    'bg-flying-type-secondary',
    'bg-ghost-type',
    'bg-ghost-type-secondary',
    'bg-grass-type',
    'bg-grass-type-secondary',
    'bg-ground-type',
    'bg-ground-type-secondary',
    'bg-ice-type',
    'bg-ice-type-secondary',
    'bg-normal-type',
    'bg-normal-type-secondary',
    'bg-poison-type',
    'bg-poison-type-secondary',
    'bg-psychic-type',
    'bg-psychic-type-secondary',
    'bg-rock-type',
    'bg-rock-type-secondary',
    'bg-steel-type',
    'bg-steel-type-secondary',
    'bg-water-type',
    'bg-water-type-secondary',
  ],
  plugins: [],
} satisfies Config;
