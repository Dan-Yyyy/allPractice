import { configureStore } from "@reduxjs/toolkit";
import pokemonsSlice from './pokemons/pokemons';
import pokemonSlice from './pokemon/pokemon';
import { devToolsEnhancer } from 'redux-devtools-extension';

export const store = configureStore({
  reducer: {
    pokemons: pokemonsSlice,
    pokemon: pokemonSlice
  },
  devTools:[ devToolsEnhancer({ realtime: true }) ],
})