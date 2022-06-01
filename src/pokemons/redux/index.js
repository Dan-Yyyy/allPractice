import { configureStore } from "@reduxjs/toolkit";
import pokemonsSlice from './pokemons/pokemons';
import { devToolsEnhancer } from 'redux-devtools-extension';

export const store = configureStore({
  reducer: {
    pokemons: pokemonsSlice
  },
  devTools:[ devToolsEnhancer({ realtime: true }) ],
})