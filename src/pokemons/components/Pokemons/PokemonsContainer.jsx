import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchPokemonsList } from './../../redux/pokemons/pokemons';
import { Pokemons } from "./../Pokemons/Pokemons";
import { PokemonItem } from "./../PokemonItemPage/PokemonItem";

export const PokemonsContainer = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsList({ofset: 0, count: 25}))
  },[]);

  return(
    <Routes>
      <Route path="/" element={<Pokemons />}/>
      <Route path="pokemon/:name" element={<PokemonItem/>} />
    </Routes>
  )
};