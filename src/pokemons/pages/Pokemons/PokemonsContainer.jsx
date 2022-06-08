import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchPokemonsList } from '../../redux/pokemons/pokemonsThunk';
import { Pokemons } from "./Pokemons";
import { PokemonItem } from "../PokemonItemPage/PokemonItem";

export const PokemonsContainer = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsList({ofset: 0, count: 15}))
  },[]);

  return(
    <Pokemons />
  )
};