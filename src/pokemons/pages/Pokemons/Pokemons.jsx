import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { FixedSizeList as List } from "react-window";
// import AutoSizer from "react-virtualized-auto-sizer";
import { Header } from "../../components/Header/Header";
import { PokemonsItem } from '../../components/PokemonsItem/PokemonsItem';
import "./Pokemons.sass";

export const Pokemons = () => {
  const navigate = useNavigate();
  
  const statePokemons = useSelector(state => state.pokemons);

  useEffect(() => {
    if(statePokemons.status === 'rejected') {
      navigate("/error");
    }
  },[statePokemons.status]);
  
  return (
    <div className="pokemonPage">
      <Header/>
      <div className="pokemons">
        <div className="pokemons__container">
          {
            statePokemons.status === 'fullfield' 
            ? statePokemons.dataItem.map((item, index) => 
            <Link to={`pokemon/${item.id}`} key={ `${item.name}.${index}`} className='pokemons__link'>
              <PokemonsItem
                name={ item.name } 
                image={ item.sprites.other.dream_world }
                type={ item.types[0].type.name }
                idPokemon={ item.id }
                /> 
            </Link>
              )
            : null
          }
        </div>
      </div>
    </div>
  )
}