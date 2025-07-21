export const funcUtilitiesObjectFilter = (data) => ({
  name: data.name,
  id: data.id,
  img: data.sprites.versions["generation-v"]["black-white"].animated.front_default || 'fallback_image.png',
  types: data.types.map((type) => type.type.name),

  // Lista com todos os stats
  stats: data.stats.map((stat) => ({
    name: stat.stat.name,
    value: stat.base_stat
  })),

  // Altura e peso
  height: data.height,
  weight: data.weight,

  // Estrutura específica HP, Ataque e Defesa
  baseStats: {
    hp: data.stats.find((s) => s.stat.name === "hp").base_stat,
    attack: data.stats.find((s) => s.stat.name === "attack").base_stat,
    defense: data.stats.find((s) => s.stat.name === "defense").base_stat
  }
});


export const funcUtilitiesGetApis = (offset,limit) => ({
   requestPokemonAllTypes : `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
})