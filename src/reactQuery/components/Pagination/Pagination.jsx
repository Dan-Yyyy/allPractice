import React from "react";
import style from './Pagination.module.sass';

const Pagination = ({limit, setActivePage, activePage}) => {

  const allAlbum = 100;
  const countPage = Math.ceil( allAlbum / limit);
  
  let allPages = [];
  for(let i = 1; i <= countPage; i++ ) {
    allPages.push(i);
  }
  return(
    <div className={ style.pagination }>
      {
        allPages.map(item => (
          <button className={ activePage === item ? style.paginationItem_Active : style.paginationItem } 
            key={item} 
            onClick={activePage === item ? null : () => setActivePage(item)}>
              {item}
          </button>
        ))
      }
      
    </div>
  )
};

export default Pagination;