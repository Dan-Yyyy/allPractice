import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";
import { useDispatch } from "react-redux";
import { filterPokemons, unFilterPokemons } from "./../../redux/pokemons/pokemons";
import "./Header.sass";
import logo from "./../../assets/image/logo.svg";
import sortDefault from "./../../assets/image/sortDefault.svg";
import sort from "./../../assets/image/sort.svg";

export const Header = () => {
  const [filterItems, setFilterItems] = useState(false);
  const dispatch = useDispatch();

  const filter = () => {
    if(!filterItems) {
      dispatch(filterPokemons())
      setFilterItems(!filterItems);
    } else {
      dispatch(unFilterPokemons());
      setFilterItems(!filterItems);
    };
  }

  return(
    <div className="header">
      <div className="header__container">
        <Link className="header__logo" to='/'>
          <img src={ logo } alt="logo" />
          <span>Pokédex</span>
        </Link>
        <div className="header__filter" onClick={filter}>
          <img src={ filterItems ? sort : sortDefault } alt="sort" />
        </div>
      </div>
      <Search />
    </div>
  )
}
