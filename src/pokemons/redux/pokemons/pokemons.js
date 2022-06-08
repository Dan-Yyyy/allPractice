import { createSlice } from "@reduxjs/toolkit";
import { fetchPokemonsList } from "./pokemonsThunk";

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: {
    status: 'loading',
    count: null,
    dataItem: []
  },
  reducers: {
    filterPokemons(state) {
      state.dataItem = state.dataItem.sort((a, b) => a.name > b.name ? 1 : -1);
    },
    unFilterPokemons(state) {
      state.dataItem = state.dataItem.sort((a, b) => a.id > b.id ? 1 : -1);
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchPokemonsList.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchPokemonsList.fulfilled, (state, {payload}) => {
      state.status = "fullfield";
      state.count = payload.countPokemon;
      state.dataItem = payload.resultItems;
    })
  }
})

export const { filterPokemons, unFilterPokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;