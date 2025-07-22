import type {PokemonCard} from "../../../types/types";
import styles from './Card.module.scss';
import {TYPE_COLOR} from "../../../constants/constants.ts";

type Card = {
  pokemon: PokemonCard
}

const Card = ({pokemon}: Card) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={pokemon.images[0]} alt={"poke photo"}/>
      </div>

      <div className={styles.infos}>
        <div className={styles.top}>
          <h3 className={styles.title}>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h3>

          <span className={styles.types}>
            {pokemon.types.map((type, index) =>
              <span className={styles.type} style={{backgroundColor: TYPE_COLOR[type as keyof typeof TYPE_COLOR]}} key={index}>
                {type}
              </span>
            )}
          </span>
        </div>

        {pokemon.generation}
      </div>
    </div>
  );
};

export default Card;