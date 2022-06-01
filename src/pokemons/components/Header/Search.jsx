import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import "./Header.sass";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [searchIcon, setSearchIcon] = useState(false);
  const [deleteIcon, setDeleteIcon] = useState(false);

  const searchChange = (e) => {
    setSearch(e.target.value);
    setDeleteIcon(true);
    if(!e.target.value) 
      setDeleteIcon(false);
  }

  const searchBlur = (e) => {
    if(!e.target.value) 
      setSearchIcon(false);
  }

  const searchFocus = () => {
    setSearchIcon(true);
  }

  const deleteText = () => {
    setSearch('');
    setDeleteIcon(false);
    setSearchIcon(false);
  }

  return(
    <div className="search">
      <AiOutlineSearch size={ 16 } 
        className={searchIcon ? "search__icon search__icon--active" : "search__icon"}/>
      <input type="text" 
        value={ search } 
        onChange={ searchChange } 
        placeholder="Procurar" 
        onBlur={ searchBlur }
        onFocus={ searchFocus }/>
      <AiOutlineClose size={ 14 } 
        className={deleteIcon ? "search__delete search__delete--active" : "search__delete"} 
        onClick={ deleteText }/>
    </div>
  )
}