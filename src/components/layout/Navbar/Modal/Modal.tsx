import React, {useCallback} from "react";
import {getFavoritePokes} from "../../../../hooks/api.ts";
import {useFetch} from "../../../../hooks/fetch.ts";
import {useCookies} from "react-cookie";
import type {PokemonCard} from "../../../../types/types";
import Cards from "../../../Cards/Cards.tsx";
import styles from "./Modal.module.scss";

type Modal = {
  closeModal: () => void;
};

const Modal = ({closeModal}: Modal) => {
  const [cookies] = useCookies(['favorite-pokes']);
  const fetchPokemons = useCallback(() => getFavoritePokes(cookies["favorite-pokes"]), [cookies["favorite-pokes"]]);
  const {loading, error, data} = useFetch<PokemonCard[]>(fetchPokemons);

  return (
    <div className={styles.modal} onClick={closeModal}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <h3 className={styles.title}>Favoritos:</h3>
        <Cards pokeCards={data ?? []}/>
      </div>
    </div>
  );
};

export default Modal;