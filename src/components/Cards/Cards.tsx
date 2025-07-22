import type {PokemonCard} from "../../types/types";
import Card from "./Card/Card.tsx";
import styles from './Cards.module.scss';

type Cards = {
  pokeCards: PokemonCard[]
}

const Cards = ({pokeCards}: Cards) => {

  return (
    <div className={styles.cards}>
      {pokeCards.map((poke, index) => <Card pokemon={poke} key={index}/>)}
    </div>
  );
};

export default Cards;