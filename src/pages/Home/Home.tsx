import {useCallback, useState} from "react";
import Cards from "../../components/Cards/Cards.tsx";
import {useFetch} from "../../hooks/fetch.ts";
import {getAllPokeCards} from "../../hooks/api.ts";
import type {PokemonCard} from "../../types/types";
import styles from './Home.module.scss';
import Search from "../../components/Search/Search.tsx";

const Home = () => {
  const [limit, setLimit] = useState<number>(20);
  const [page, setPage] = useState(0);
  const fetchPokemons = useCallback(() => getAllPokeCards(page, limit), [page, limit]);

  const {loading, error, data} = useFetch<PokemonCard[]>(fetchPokemons);

  //view exibir como se fosse uma pokedex
  //TODO: Aba de treinadores e cidades, exibir dados sobre onde esse treinador ou cidade aparceu, pokemons desse treinador e cidade, e dados sobre eles;
  //TODO: Fazer component loader

  return (
    <div className={styles.page}>
      <div className={styles.component}><Search /></div>
      <Cards pokeCards={data ?? []} />
    </div>
  );
};

export default Home;