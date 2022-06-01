import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Pokemons } from "./components/Pokemons/Pokemons";
import "./PokemonPage.sass";

const PokemonPage = () => {
  return(
    <div className="pokemon-page">
      <Provider store={store}>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Pokemons />}/>
            {/* <Route path="/albums/:id" element={<AlbumItem/>} /> */}
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default PokemonPage;