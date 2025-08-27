import axios from "axios";
import {POKEMON_GENERATIONS_REGIONS} from "../constants/constants.ts";
import type {ApiPoke, PokeData, PokeSpecie} from "../types/apiTypes";
import type {Pokemon, PokemonCard} from "../types/types";

const baseUrl = 'https://pokeapi.co/api/v2/';
const api = axios.create({
  baseURL: baseUrl,
})

export const getAllPokeCards = async (page: number, limit: number) => {
  const response = await api.get(`pokemon?limit=${limit}&offset=${page * limit}`).then(res => res.data.results) as ApiPoke[];

  const pokeData = await Promise.all(
    response.map(async (data) => await getPokemonData(data.name))
  );

  return pokeData.map((item) => pokeCards(item));
};

export const getPokemonData = async (id: string | number): Promise<Pokemon> => {
  const pokemon = await api.get(`pokemon/${id}`).then(res => res.data) as PokeData;
  // const pokeSpecie = await api.get(`pokemon-species/${id}`).then(res => res.data) as PokeSpecie;

  return {
    id: pokemon.id,
    name: pokemon.name,
    generation: 'Kanto', //TODO: corrigir req de poke specie
    height: pokemon.height,
    weight: pokemon.weight,
    images: [
      pokemon.sprites.front_default,
      pokemon.sprites.back_default,
      pokemon.sprites.front_shiny,
      pokemon.sprites.back_shiny
    ],
    types: pokemon.types.map(({type}) => type.name),
    //TODO: adicionar moves depois
  };
}

export const getFavoritePokes = async (pokeIds: number[]): Promise<any> => {
  const pokeData = await Promise.all(
    pokeIds.map(async (id) => await getPokemonData(id))
  );

  return pokeData.map((item) => pokeCards(item));
}

export const getAllPokeCount = async (): Promise<number> => {
  const response = await api.get('pokemon').then(res => res.data);
  return response.count;
}

const pokeCards = (pokeData: Pokemon): PokemonCard => {
  return {
    id: pokeData.id,
    name: pokeData.name,
    types: pokeData.types,
    images: pokeData.images,
    generation: pokeData.generation
  }
}