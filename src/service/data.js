import axios from "axios";
import { TbWashDryP } from "react-icons/tb";

export const getPokemon = async () => {
  try {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=864";
    const res = await axios.get(url);
    return res.data.results;
  } catch (error) {
    console.error("Error fetching Pokemon data :", error);
    return [];
  }
};

export const getInfo = async (pokemon) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    return [];
  }
};
