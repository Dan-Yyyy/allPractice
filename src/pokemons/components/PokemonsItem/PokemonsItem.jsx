import React from "react";
import './PokemonsItem.sass';

export const PokemonsItem = ({name, image, idPokemon, type}) => {
  
  return(
    <div className={`pokemonsItem__wrap pokemonsItem__wrap--`+type}>
      <span className="pokemonsItem__id">#{idPokemon}</span>
      <div className="pokemonsItem__image">
        <img src={ image.front_default } alt={ name } />
      </div>
      <div className="pokemonsItem__name">
        <span>{name}</span>
      </div>
    </div>
  )
}