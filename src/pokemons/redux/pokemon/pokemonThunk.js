import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemons } from "./../../API/pokemonsApi";

export const getchPokemon = createAsyncThunk(
  'pokemon/pokemonAPI', 
  async (id) => {
    // let urls = [];
    // let resultItems = [];
    try{
      const result = await pokemons.getPokemonWithUrl(id)
      .then(response => {
        return response;
      });
      return result;
    }
    catch(err) {
      throw new Error('Unable to get a token.')
    }
  }
);