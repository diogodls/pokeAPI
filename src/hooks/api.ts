import axios from "axios";

const baseUrl = 'https://pokeapi.co/api/v2/';
const api = axios.create({
  baseURL: baseUrl,
})

type apiPoke = {
  name: string,
  url: string,
}

export const getAllPokeCards = async (page: number, limit: number) => {
  const response = await api.get(baseUrl + `pokemon?limit=${limit}&offset=${page}`).then(res => res.data.results) as apiPoke[];

  const pokeData = Promise.all(
    response.map(async (data) => {
      const pokeData = await api.get(`pokemon/${data.name}`).then(res => res.data);
    })
  );
};

export const getPoke = (id: number) => {
  return api.get(baseUrl + `pokemon/${id}`);
};

