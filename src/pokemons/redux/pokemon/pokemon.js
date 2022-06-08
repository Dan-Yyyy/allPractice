import { createSlice } from "@reduxjs/toolkit";
import { getchPokemon } from "./pokemonThunk";

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState: {
    status: 'loading',
    item: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getchPokemon.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getchPokemon.fulfilled, (state, {payload}) => {
      state.status = "fullfield";
      state.item = payload;
    })
    .addCase(getchPokemon.rejected, (state) => {
      state.status = 'rejected';
    })
  }
})

export default pokemonSlice.reducer;