// Importes de utilitarias, abrir pokemon clicado e aplicação de estilos dinâmicos.
import { searchAndOpenPokemon } from "../PastUtilitiesObjectAndFunction/funcSearchPokemonInputAndCard.js";
import {
  mappingStrTypesColor,
  mappingIconTypes,
  mappingLinearNameTypesColor,
  mappingBackgroundLinearTypesColor,
  mappingBoxShadowAnimationTypesColor,
} from "../PastUtilitiesObjectAndFunction/funcUtilitiesStyleMapping.js";

export const funcCardPokemon = (InsertTagIn, data) => {
  // Desestruturação de dados.
  const { name, id, img, types } = data;
  const bodyCard = document.createElement("section");
  bodyCard.className = "bodyCard";
  // Mapeamento  box-shadow de acordo com o tipo do pokemon.
  bodyCard.style = `${mappingBoxShadowAnimationTypesColor(types)}`;

  /* 
  Linha 28 - Background linear de acordo com o types[].
  Linha 32 - Text com cores lineares de acordo com o types[].
  Linha 39 - Icones e quantidade de pokemon de acordo com o types[].
  linha 41 - Text com cores unicas de acordo com a quantidade e types[].
  */

  // HTML
  bodyCard.innerHTML = `
    <figure class="imgNamePokemon" style="${mappingBackgroundLinearTypesColor(
      types
    )}">
      <figcaption>
        <h2 class="pokemonName" style="${mappingLinearNameTypesColor(
          types
        )}">${name} | #${id}</h2>
      </figcaption>
      <img src="${img}" alt="${name}">
    </figure>
    <div class="infoTypeIconPokemon">
      <div>${mappingIconTypes(types)}</div>
      <div>
        ${mappingStrTypesColor(types)}
      </div>
    </div>
  `;

  // Evento de clique
  bodyCard.addEventListener("click", async () => {
    console.log(`Pokémon ${name} foi clicado`);
    // Abri os detalhes do pokemon(pageInformationDetailed.html).
    await searchAndOpenPokemon(name);
  });

  // Inserindo component em outro component
  InsertTagIn.appendChild(bodyCard);
};
