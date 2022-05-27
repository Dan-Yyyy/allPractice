import React from "react";
import { albums } from '../Api/albums';
import { useAlbum } from "../hooks/useAlbum";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import style from './Album.module.sass';
import Loading from "./Loading/Loading";
import { Link, useLocation  } from "react-router-dom";
import { BsArrowLeftCircle } from 'react-icons/bs';


const Album = ({title, id}) => {

  const page = 1;
  const idAlbum = id;
  const route = useLocation();

  const photosArr = useAlbum('album', page, idAlbum, albums.getPhotosAlbum);
  return(
    <div className={ style.sliderContainer }>
      <div className={ style.sliderTitle }>
        <div className={ style.prevPage }>
          {
            route.pathname === `/albums/${id}` && <Link to={`/`}>
              <BsArrowLeftCircle size={ 30 }/>
            </Link>
          }
          <h1 className={ style.albumName }>{title}</h1>
        </div>
        {
          route.pathname !== `/albums/${id}` && <Link to={`/albums/${id}`}>More</Link>
        }
      </div>
      <div className={ style.slider }>
        {
          !photosArr.isLoading 
           ? <Swiper
                spaceBetween={30}
                slidesPerView={3}
              >{
                photosArr.data.map(item => (
                  <SwiperSlide key={ item.id } className={style.slideContainer}>
                    <h1 className={ style.slideTitle }>{ item.title }</h1>
                    <div className={ style.imgContainer }>
                      <img src={ item.url } alt={ item.title } className={ style.img }/>
                    </div>
                  </SwiperSlide>
                ))
              }
              </Swiper>
           : <Loading/>
        }
      </div>
    </div>
  )
}

export default Album;