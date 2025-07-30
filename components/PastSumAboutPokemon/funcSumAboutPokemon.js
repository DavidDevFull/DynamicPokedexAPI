import { fetchPokemonDescription } from "../PastUtilitiesObjectAndFunction/funcLoadingScrollPokemon.js";
import {
  mappingStrTypesColor,
  mappingIconTypes,
  mappingLinearNameTypesColor,
  mappingBackgroundLinearTypesColor,
  mappingBoxShadowAnimationTypesColor,
} from "../PastUtilitiesObjectAndFunction/funcUtilitiesStyleMapping.js";

export const funcSumAboutPokemon = async (inserirInTag) => {
  const basePath = "../../image/iconsStates/";

  // Restante do seu código...

  const params = new URLSearchParams(window.location.search);

  const pokemon = {
    name: params.get("name"),
    id: params.get("id"),
    img: params.get("img"),
    types: params.get("types"),
    hp: params.get("hp"),
    attack: params.get("attack"),
    defense: params.get("defense"),
    height: params.get("height"),
    weight: params.get("weight"),
  };

  const mappingIconsStates = () => {
    // Mapeamento dos ícones para cada atributo
    const iconsStatesMapping = {
      hp: `${basePath}iconLife.png`,
      attack: `${basePath}iconAtack.png`,
      defense: `${basePath}iconDefense.png`,
      height: `${basePath}iconHeight.png`,
      weight: `${basePath}iconWeight.png`,
    };

    const attributesToMap = ["hp", "attack", "defense", "height", "weight"];

    const htmlOutput = attributesToMap
      .map((attrKey) => {
        const value = pokemon[attrKey];
        const iconSrc = iconsStatesMapping[attrKey];
        const iconName = attrKey.charAt(0).toUpperCase() + attrKey.slice(1);

        if (value !== null && value !== undefined && iconSrc) {
          return `
        <div class="pokemonStatItem">
          <img width="32px" src="${iconSrc}" alt="${iconName}">
          <span class="stat-value">${value}</span>
        </div>
      `;
        }
        return "";
      })
      .join("");

    return htmlOutput;
  };

  const { name, id, img, types } = pokemon;

  const typesSeparetor = types.split(",");

  const description = await fetchPokemonDescription(pokemon.id);

  const sumAboutPokemon = document.createElement("section");
  sumAboutPokemon.className = "styleSecSumAboutPokemon";
  // Aplica as variáveis CSS e a animação definidas em mappingBoxShadowAnimationTypesColor
  sumAboutPokemon.style = `${mappingBoxShadowAnimationTypesColor(
    typesSeparetor
  )}`;

  sumAboutPokemon.innerHTML = `
    <div class="divImgPokemonAndTypesIcons" style="${mappingBackgroundLinearTypesColor(
      typesSeparetor
    )}">
      <div>
          <div class="divPokemonTypeIcons">
            ${mappingIconTypes(typesSeparetor)}
          </div>
          <img class="imgPokemon" src="${img}" alt="${name}">
        </div>
      </div>

    <div class="divInformationPokemon">
      <div>
        <h2 style="${mappingLinearNameTypesColor(typesSeparetor)}">
        ${name} / #${id}</h2>
        <span>${mappingStrTypesColor(typesSeparetor)}<span>
      </div>
      <p>${description}</p>
    </div>

    <div class="divInformatoinStats">
        ${mappingIconsStates()}
    </div>
  `;

  inserirInTag.appendChild(sumAboutPokemon);
};
