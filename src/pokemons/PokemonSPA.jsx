import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonsContainer } from "./pages/Pokemons/PokemonsContainer";
import { PokemonItem } from "./pages/PokemonItemPage/PokemonItem";
import { Error } from "./pages/Error/Error";
import "./PokemonSPA.sass";

const PokemonSPA = () => {
  return(
    <div className="pokemonSPA">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PokemonsContainer />}/>
            <Route path="pokemon/:id" element={<PokemonItem/>}/>
            <Route path="error" element={<Error/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default PokemonSPA;