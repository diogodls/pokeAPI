import Navbar from "./components/layout/Navbar/Navbar.tsx";
import {Outlet} from "react-router";
import Footer from "./components/layout/Footer/Footer.tsx";
import {useEffect, useState} from "react";
import {useFetch} from "./hooks/fetch.ts";
import {getAllPokeCards} from "./hooks/api.ts";

const App = () => {
  const [limit, setLimit] = useState<number>(20);
  const [page, setPage] = useState(1);
  const {loading, error, data} = useFetch(() => getAllPokeCards(1, 10));

  // useEffect(() => {
    // console.log('app');
    // console.log(loading, error, data);
    // setPokemons(allPokes)
  // }, [loading]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;