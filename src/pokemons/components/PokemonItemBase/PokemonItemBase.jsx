import React from "react";
import "./PokemonItemBase.sass";

export const PokemonItemBase = ({ lavel, name, type }) => {
  let shortName;

  if(name === "hp") shortName = "HP";
  if(name === "attack") shortName = "ATK"
  if(name === "defense") shortName = "DEF"
  if(name === "special-attack") shortName = "SATK"
  if(name === "special-defense") shortName = "SDEF"
  if(name === "speed") shortName = "SPD"

  return(
    <div className={`pokemonItemBase pokemonItemBase--`+ type}>
      <div className="pokemonItemBase__name">{shortName}</div>
      <div className="pokemonItemBase__lavel">
        <span>{lavel < 100 ? '0' + lavel : lavel }</span>
        <div className="pokemonItemBase__row">
        <div className="pokemonItemBase__rowFront" style={{width: (lavel/2)+'%'}}></div>
        </div>
      </div>
    </div>
  )
}