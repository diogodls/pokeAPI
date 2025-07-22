import {useState} from "react";
import Cards from "../../components/Cards/Cards.tsx";
import {useFetch} from "../../hooks/fetch.ts";
import {getAllPokeCards} from "../../hooks/api.ts";
import type {PokemonCard} from "../../types/types";
import styles from './Home.module.scss';


const Home = () => {
  const [limit, setLimit] = useState<number>(20);
  const [page, setPage] = useState(0);
  const {loading, error, data} = useFetch<PokemonCard[]>(() => getAllPokeCards(page, limit));

  return (
    <div>
      <div className={styles.component} style={{display: 'flex', width: '100%', justifyContent: 'center'}}>busca</div>
      <Cards pokeCards={data ?? []} />
    </div>
  );
}

export default Home;