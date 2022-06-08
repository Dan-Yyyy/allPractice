import React from "react";
import "./PokemonItemTypes.sass";

export const PokemonItemTypes = ({type}) => {
  
  return(
    <div className={`pokemonItemTypes pokemonItemTypes--`+type}>
      {type}
    </div>
  )
}