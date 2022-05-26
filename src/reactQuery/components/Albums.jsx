import { albums } from './../Api/albums';
import Album from './Album';
import Pagination from './Pagination/Pagination';
import style from './Album.module.sass';
import { useState } from 'react';
import Loading from './Loading/Loading';
import { useAlbum } from './../hooks/useAlbum';

const Albums = () => {
  const limit = 10;
  const [activePage, setActivePage] = useState(1);
  const albumsArr = useAlbum('albums', activePage, limit, albums.getAlbums);

  return(
    <div className={ style.albums }>
    { !albumsArr.isLoading && albumsArr.status === 'success'
      ? 
      <>
        { albumsArr.data.map(item => (
            <Album key={item.id} title={ item.title } id={ item.id }/>
          ))
        }
        <Pagination limit={limit} setActivePage={setActivePage} activePage={activePage}/>
      </>
      : <Loading/>
    }
    </div>
  )
};

export default Albums;