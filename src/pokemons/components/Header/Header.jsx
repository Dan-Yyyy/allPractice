import React from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";
import "./Header.sass";
import logo from "./../../assets/image/logo.svg";
import sortDefault from "./../../assets/image/sortDefault.svg";
import sort from "./../../assets/image/sort.svg";

export const Header = () => {
  return(
    <div className="header">
      <div className="header__container">
        <Link className="header__logo" to='/'>
          <img src={ logo } alt="logo" />
          <span>Pokédex</span>
        </Link>
        <div className="header__filter">
          <img src={ sortDefault } alt="sort" />
        </div>
      </div>
      <Search />
    </div>
  )
}
