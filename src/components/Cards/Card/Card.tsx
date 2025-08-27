import type {PokemonCard} from "../../../types/types";
import styles from './Card.module.scss';
import {TYPE_COLOR} from "../../../constants/constants.ts";
import {Link} from "react-router";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {useCookies} from "react-cookie";
import {classNames} from "../../../utils/classNames.ts";

type Card = {
  pokemon: PokemonCard
}

const Card = ({pokemon}: Card) => {
  const [cookies, setCookie] = useCookies(['favorite-pokes']);

  const setFavoritePokemon = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    console.log(cookies);
    if (cookies["favorite-pokes"]?.includes(pokemon.id)) {
      setCookie("favorite-pokes", cookies["favorite-pokes"].filter((pokeId: number) => pokeId != pokemon.id))
    } else {
      setCookie("favorite-pokes", [...(cookies["favorite-pokes"] ??  []), pokemon.id]);
    }
  };

  if (!pokemon) return <div>erro!</div>;

  return (
    <Link to={`/pokemon/${pokemon.name}`} className={styles.card}>
      <div className={styles.image}>
        <img src={pokemon.images[0]} alt={"poke photo"}/>
        <FontAwesomeIcon
          icon={faHeart}
          className={classNames([styles.icon, ...[cookies["favorite-pokes"]?.includes(pokemon.id) ? styles.active : '']])}
          onClick={(e) => setFavoritePokemon(e)}
        />
      </div>

      <div className={styles.infos}>
        <div className={styles.top}>
          <h3 className={styles.title}>
            {pokemon.name[0].toUpperCase() + pokemon.name?.slice(1)}
          </h3>

          <span className={styles.types}>
            {pokemon.types.map((type, index) =>
              <span className={styles.type} style={{backgroundColor: TYPE_COLOR[type as keyof typeof TYPE_COLOR]}} key={index}>
                {type}
              </span>
            )}
          </span>
        </div>

        {pokemon.generation} / nº {pokemon.id}
      </div>
    </Link>
  );
};

export default Card;