import React from "react";
import { PokemonsItem } from './../PokemonsItem/PokemonsItem';
import "./Pokemons.sass";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Header } from "./../Header/Header";

export const Pokemons = () => {
  
  const statePokemons = useSelector(state => state.pokemons);
  
  return (
    <div className="pokemonPage">
      <Header/>
      <div className="pokemons">
        <div className="pokemons__container">
          {
            statePokemons.status === 'fullfield' 
            ? statePokemons.dataItem.map((item, index) => 
            <Link to={`pokemon/${item.name}`} key={ `${item.name}.${index}`} className='pokemons__link'>
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