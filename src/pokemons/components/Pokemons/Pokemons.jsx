import React, { useEffect } from "react";
import { PokemonsItem } from './../PokemonsItem/PokemonsItem';
import { fetchPokemonsList } from './../../redux/pokemons/pokemons';
import "./Pokemons.sass";
import { useDispatch, useSelector } from "react-redux";

export const Pokemons = () => {
  
  const dispatch = useDispatch();
  // const statePokemons = useSelector(state => state.pokemons);

  useEffect(() => {
    dispatch(fetchPokemonsList({ofset:0, count:20}))
  },[]);
  
  return (
    <div className="pokemons">
      <div className="pokemons__container">
        {/* {
          statePokemons.status === 'fullfield' 
          ? statePokemons.dataItem.map((item, index) => <PokemonsItem key={ `${item.name}.${index}` } name={ item.name } url={ item.url }/> )
          : null
        } */}
      </div>
    </div>
  )
}