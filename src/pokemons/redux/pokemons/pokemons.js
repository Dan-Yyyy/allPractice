import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { pokemons } from "./../../API/pokemonsApi";

export const fetchPokemonsList = createAsyncThunk(
  'pokemons/pokemonsAPI', 
  async (ofset, count) => {
    let resultItems = [];
    const pokemonsList = await pokemons.getPokemons(ofset, count);
    Promise.all(
      pokemonsList.results.map(item => {
        pokemons.getPokemonItem(item.url)
        .then(response => {
          resultItems = [...resultItems, response];
        })
      })
    )
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
      console.log(payload)
      state.dataItem = payload;
    })
  }
})

export default pokemonsSlice.reducer;