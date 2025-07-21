import axios from "axios";
import {POKEMON_GENERATIONS_REGIONS} from "../constants/constants.ts";
import type {ApiPoke, PokeData, PokeSpecie} from "../types/apiTypes";
import type {Pokemon, PokemonCards} from "../types/types";

const baseUrl = 'https://pokeapi.co/api/v2/';
const api = axios.create({
  baseURL: baseUrl,
})

export const getAllPokeCards = async (page: number, limit: number) => {
  const response = await api.get(baseUrl + `pokemon?limit=${limit}&offset=${page}`).then(res => res.data.results) as ApiPoke[];

  const pokeData = await Promise.all(
    response.map(async (data) => await getPokemonData(data.name))
  );

  return pokeData.map((item) => pokeCards(item))
};

export const getPokemonData = async (name: string): Promise<Pokemon> => {
  const pokemon = await api.get(`pokemon/${name}`).then(res => res.data) as PokeData;
  const pokeSpecie = await api.get(`pokemon-species/${name}`).then(res => res.data) as PokeSpecie;

  return {
    name: name,
    generation: POKEMON_GENERATIONS_REGIONS[pokeSpecie.generation.name as keyof typeof POKEMON_GENERATIONS_REGIONS],
    height: pokemon.height,
    weight: pokemon.weight,
    images: [
      pokemon.sprites.front_default,
      pokemon.sprites.back_default,
      pokemon.sprites.front_default,
      pokemon.sprites.back_shiny
    ],
    types: pokemon.types.map(({type}) => type.name),
    //adicionar moves depois
  };
}

const pokeCards = (pokeData: Pokemon): PokemonCards => {
  return {
    name: pokeData.name,
    types: pokeData.types,
    images: pokeData.images,
    generation: pokeData.generation
  }
}