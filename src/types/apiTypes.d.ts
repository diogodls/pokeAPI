export type ApiPoke = {
  name: string,
  url: string,
};

type PokeSpecie = {
  generation: InfoType, //pokemon-species
};

type PokeData = {
  id: number;
  name: string;
  sprites: { //pokemon
    front_default: string,
    back_default: string,
    front_shiny: string,
    back_shiny: string,
  }
  height: number; //pokemon
  weight: number; //pokemon
  types: {
    slot: number;
    type: InfoType;
  }[];
  //moves tem que fazer separado
};

type InfoType = {
  name: string;
  url: string;
};