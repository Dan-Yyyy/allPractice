import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BiArrowBack } from "react-icons/bi";
import { MdOutlineKeyboardArrowLeft,
        MdOutlineKeyboardArrowRight } from "react-icons/md";
import { PokemonItemTypes } from "./../../components/PokemonItemTypes/PokemonItemTypes";
import { PokemonItemAbout } from "../../components/PokemonItemAbout/PokemonItemAbout";
import { PokemonItemBase } from "./../../components/PokemonItemBase/PokemonItemBase";
import { getchPokemon } from '../../redux/pokemon/pokemonThunk';
import iconEnergy from "./../../assets/image/energy.svg";
import iconWeight from "./../../assets/image/weight.svg";
import iconHeight from "./../../assets/image/height.svg";
import './PokemonItem.sass';

export const PokemonItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getchPokemon(id))
  },[id]);

  const statePokemon = useSelector(state => state.pokemon);
  const countPokemon = useSelector(state => state.pokemons.count);
  const item = statePokemon.item;
  
  useEffect(() => {
    if(statePokemon.status === 'rejected') {
      navigate("/error");
    }
  },[statePokemon.status]);
 

  return(
    <>
    {
      statePokemon.status === 'fullfield' 
      ? 
        <div className={`pokemonItemPage pokemonItemPage--`+item.types[0].type.name}>
          <div className="pokemonItem__container">
            <div className="pokemonItem__name">
              <Link to="/">
                <BiArrowBack size={32}/>
                <span>{ item.name }</span>
              </Link>
              <div className="pokemonItem__id">#{item.id}</div>
            </div>
            <div className="pokemonItem__information">
              <div className="pokemonItem__front">
                <div className="pokemonItem__arrow">
                  {
                    item.id > 1
                    ? <Link to={`/pokemon/${(item.id-1)}`}>
                        <MdOutlineKeyboardArrowLeft size={32}/>
                    </Link>
                    : null
                  }
                </div>
                <div className="pokemonItem__image">
                  <img src={item.sprites.other.dream_world.front_default} alt={item.name} />
                </div>
                <div className="pokemonItem__arrow">
                  {
                    item.id < countPokemon - 1
                    ? <Link to={`/pokemon/${(item.id + 1)}`}>
                        <MdOutlineKeyboardArrowRight size={32}/>
                    </Link>
                    : null
                  }
                </div>
              </div>
              <div className="pokemonItem__infoBlock">
                <div className="pokemonItem__types">
                  { item.types?.map(item => {
                    return <PokemonItemTypes key={ item.type.name } type={ item.type.name }/>
                  })}
                </div>
                <div className="pokemonItem__about">
                  <h1 className={`pokemonItem__title pokemonItem__title--`+item.types[0].type.name}>About</h1>
                  <div className="pokemonItem__aboutItems">
                    <PokemonItemAbout icon={ iconWeight } data={(item.weight)/10 + ' kg' } text={'Weight'}/>
                    <PokemonItemAbout icon={ iconHeight } data={(item.height)/10 + '  m' } text={'Height'}/>
                    <PokemonItemAbout icon={ iconEnergy } data={item.base_experience } text={'Experience'}/>
                  </div>
                </div>
                <div className="pokemonItem__base">
                  <h1 className={`pokemonItem__title pokemonItem__title--`+item.types[0].type.name}>Base Stats</h1>
                  <div className="pokemonItem__baseItems">
                    {
                      item.stats.map(stats => {
                        return <PokemonItemBase 
                          key={ stats.stat.name } 
                          lavel={ stats.base_stat } 
                          name={ stats.stat.name } 
                          type={ item.types[0].type.name }/>
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      : null
      }
    </>
  )
}