import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { pokemons } from "./../../API/pokemonsApi";

export const fetchPokemonsList = createAsyncThunk(
  'pokemons/pokemonsAPI', 
  async (ofset, count) => {
    let urls = [];
    let resultItems = [];
    await pokemons.getPokemons(ofset, count)
    .then(response => {
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
    return resultItems;
  }
);

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: {
    status: 'loading',
    dataItem: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchPokemonsList.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchPokemonsList.fulfilled, (state, {payload}) => {
      state.status = "fullfield";
      state.dataItem = payload;
    })
  }
})

export default pokemonsSlice.reducer;