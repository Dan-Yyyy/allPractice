import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { PokemonsContainer } from "./components/Pokemons/PokemonsContainer";
import "./PokemonSPA.sass";

const PokemonSPA = () => {
  return(
    <div className="pokemonSPA">
      <Provider store={store}>
        <BrowserRouter>
          <PokemonsContainer/>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default PokemonSPA;