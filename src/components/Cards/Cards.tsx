import type {PokemonCard} from "../../types/types";
import Card from "./Card/Card.tsx";
import styles from './Cards.module.scss';
import {classNames} from "../../utils/classNames.ts";

type Cards = {
  pokeCards: PokemonCard[]
  className: string;
}

const Cards = ({pokeCards, className}: Cards) => {

  return (
    <div className={classNames([styles.cards, className])}>
      {pokeCards.map((poke, index) => <Card pokemon={poke} key={index}/>)}
    </div>
  );
};

export default Cards;