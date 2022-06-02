import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { BiArrowBack } from "react-icons/bi";
import './PokemonItem.sass';

export const PokemonItem = () => {

  const statePokemons = useSelector(state => state.pokemons);
  const { name } = useParams();
  const item = statePokemons.dataItem.find(item => item.name === name);

  return(
    <>
    {
      statePokemons.status === 'fullfield' 
      ? 
        <div className={`pokemonItemPage pokemonItemPage--`+item.types[0].type.name}>
          <div className="pokemonItem__container">
            <div className="pokemonItem__name">
              <Link to="/">
                <BiArrowBack size={32}/>
                <span>{ item.name }</span>
              </Link>
              <div className="pokemonItem__id">#{item.id}</div>
            </div>
            <div className="pokemonItem__information">
              <div className="pokemonItem__front">
                <div className="arrow"></div>
                <div className="pokemonItem__image">
                  <img src={item.sprites.other.dream_world.front_default} alt={item.name} />
                </div>
                <div className="arrow"></div>
              </div>
              <div className="pokemonItem__infoBlock">
                hdjsjsj
              </div>
            </div>
          </div>
        </div>
      : null
      }
    </>
  )
}