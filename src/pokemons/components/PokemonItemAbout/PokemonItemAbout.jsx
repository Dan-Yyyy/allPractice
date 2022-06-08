import React from "react";
import "./PokemonItemAbout.sass";

export const PokemonItemAbout = ({icon, data, text}) => {
  return(
    <div className="pokemonItemAbout">
      <div className="pokemonItemAbout__container">
      <img src={ icon } alt="icon" />
      <span>{data}</span>
      </div>
      <div className="pokemonItemAbout__text">
        {text}
      </div>
    </div>
  )
}