import { funcUtilitiesObjectFilter } from "./funcUtilitiesObjectFilter.js";

export const fetchPokemonData = async (identifier) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${identifier}/`);
    if (!res.ok) {
      console.log(`Requisição ${res.status}`);
      return null;
    }
    const data = await res.json();
    const result = funcUtilitiesObjectFilter(data);
    return result;
  } catch (error) {
    console.error("Erro na requisição:", error);
    return null;
  }
};

export const openPokemonDetailPage = (pokemonData) => {
  if (!pokemonData) {
    console.log("Pokémon não encontrado.");
    return;
  }

  const query = new URLSearchParams({
    name: pokemonData.name,
    id: pokemonData.id,
    img: pokemonData.img,
    types: pokemonData.types,
    hp: pokemonData.baseStats.hp,
    attack: pokemonData.baseStats.attack,
    defense: pokemonData.baseStats.defense,
    height: pokemonData.height,
    weight: pokemonData.weight,
  }).toString();

  const basePath = new URL("../PastPageInformationDetailed/pageInformationDetailed.html", import.meta.url).pathname;

  window.open(
    `${basePath}?${query}`, "_parent"
  );
};

export const searchAndOpenPokemon = async (value) => {
  if (!value || !value.trim()) {
    console.log("Digite um nome ou número.");
    return;
  }

  const pokemonData = await fetchPokemonData(value.trim());
  openPokemonDetailPage(pokemonData);
};