import {useCallback, useState} from "react";
import Cards from "../../components/Cards/Cards.tsx";
import {useFetch} from "../../hooks/fetch.ts";
import {getAllPokeCards} from "../../hooks/api.ts";
import type {PokemonCard} from "../../types/types";
import styles from './Home.module.scss';
import Search from "../../components/Search/Search.tsx";
import Pagination from "../../components/Pagination/Pagination.tsx";

const Home = () => {
  const LIMIT: number = 20;
  const [page, setPage] = useState(0);
  const fetchPokemons = useCallback(() => getAllPokeCards(page, LIMIT), [page]);
  const {loading, error, data} = useFetch<PokemonCard[]>(fetchPokemons);

  return (
    <div className={styles.page}>
      <Search className={styles.component}/>
      <Cards pokeCards={data ?? []} className={styles.component}/>
      <Pagination
        LIMIT={LIMIT}
        setPage={setPage}
      />
    </div>
  );
};

export default Home;

//view exibir como se fosse uma pokedex
//TODO: Aba de treinadores e cidades, exibir dados sobre onde esse treinador ou cidade aparceu, pokemons desse treinador e cidade, e dados sobre eles;
//TODO: Fazer component loader