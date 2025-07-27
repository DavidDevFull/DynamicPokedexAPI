import { searchAndOpenPokemon } from "../PastUtilitiesObjectAndFunction/funcSearchPokemonInputAndCard.js";
import {
  mappingStrTypesColor,
  mappingIconTypes,
  mappingLinearNameTypesColor,
  mappingBackgroundLinearTypesColor,
  mappingBoxShadowAnimationTypesColor,
} from "../PastUtilitiesObjectAndFunction/funcUtilitiesStyleMapping.js";

export const funcCardPokemon = (InsertTagIn, data) => {
  const { name, id, img, types } = data;
  const bodyCard = document.createElement("section");
  bodyCard.className = "cardPokemon";
  bodyCard.style = `${mappingBoxShadowAnimationTypesColor(types)}`;

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
    await searchAndOpenPokemon(name);
  });

  // Inserindo component em outro component
  InsertTagIn.appendChild(bodyCard);
};
