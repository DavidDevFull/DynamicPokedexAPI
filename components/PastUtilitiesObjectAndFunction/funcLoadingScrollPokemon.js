import { funcCardPokemon } from '../PastCardPokemon/funcCardPokemon.js'
import {
  funcUtilitiesObjectFilter,
  funcUtilitiesGetApis,
} from './funcUtilitiesObjectFilter.js';


const loadedIds = new Set();

export const funcLoadingScrollPokemon = async (refInsertCard, offset, limit) => {
  try {
    const filterActive = funcUtilitiesGetApis(offset, limit);


    const res = await fetch(filterActive.requestPokemonAllTypes);
    const data = await res.json();
    const results = data.results;
    console.log(data);

    for (const pokemon of results) {
      const resDetail = await fetch(pokemon.url);
      const detailData = await resDetail.json();
      const filtered = funcUtilitiesObjectFilter(detailData);
      console.log(filtered)

      if (loadedIds.has(filtered.id)) {
        console.log(`Pulando duplicado: ${filtered.name} (ID: ${filtered.id})`);
        continue;
      }

      loadedIds.add(filtered.id);

      funcCardPokemon(
        refInsertCard,
        filtered
      );
    }

    offset += limit;
  } catch (error) {
    console.error('Erro ao buscar Pokémon:', error);
  }
};