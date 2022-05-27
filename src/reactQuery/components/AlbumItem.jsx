import Album from './Album';
import style from './Album.module.sass';
import { useParams  } from "react-router-dom";
import { useAlbum } from '../hooks/useAlbum';
import { albums } from '../Api/albums';
import Loading from './Loading/Loading';

const AlbumItem = () => {
  const params = useParams();
  const albom = useAlbum('albumItem', 0, params.id, albums.albums);

  return(
    <div className={ style.albums }>
      { !albom.isLoading && albom.status === 'success'
        ? 
          <Album title={ albom.data.title } id={ params.id }/>
        : <Loading/>
      }
    </div>
  )
};

export default AlbumItem;