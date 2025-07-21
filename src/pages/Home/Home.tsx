import {useEffect, useState} from "react";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    // infos vem faltando, montar um card manager para os cards com base no limit e no offset, para fazer a requisição para o poke de número específico até os da primeira geração e assim montar o card
  }, [])

  return (
    <div>
      {pokemons.map(() => (
        <div></div>
      ))}
    </div>
  );
}

export default Home;