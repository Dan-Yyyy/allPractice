import * as axios from "axios";

export const pokemons = {
  getPokemons({ofset = 0, count}) {
    return axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${ofset}&limit=${count}`)
    .then(response => {
      return response.data
    })
  },
  getPokemonItem(url) {
    return axios.get(url)
    .then(response => {
      return response.data
    })
  }
}

