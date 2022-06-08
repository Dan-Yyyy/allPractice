import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemons } from "./../../API/pokemonsApi";

export const fetchPokemonsList = createAsyncThunk(
  'pokemons/pokemonsAPI', 
  async (ofset, count) => {
    try{
      let urls = [];
      let resultItems = [];
      let countPokemon = null;
      await pokemons.getPokemons(ofset, count)
      .then(response => {
        countPokemon = response.count;
        response.results.map(item => {
          urls.push(item.url)
        });
      });
      await Promise.allSettled(urls.map(url => pokemons.getPokemonItem(url)))
      .then(results => { 
        results.forEach((result) => {
          resultItems.push(result.value);
        });
      });
      return {countPokemon, resultItems };
    }
    catch(err) {
      throw new Error('Unable to get a token.')
    }
  }
);
