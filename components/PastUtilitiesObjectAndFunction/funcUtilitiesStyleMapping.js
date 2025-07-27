const basePath = new URL("../../image/iconsTypePokemon/", import.meta.url)
  .pathname;

export const funcUtilitiesStyleMapping = (typePokemon) => {
  const colorAndImageMapping = {
    normal: [
      "var(--colorTypeNormal)",
      "var(--colorTypeNormalLight)",
      `${basePath}iconNormal.png`,
    ],
    fire: [
      "var(--colorTypeFire)",
      "var(--colorTypeFireLight)",
      `${basePath}iconFire.png`,
    ],
    water: [
      "var(--colorTypeWater)",
      "var(--colorTypeWaterLight)",
      `${basePath}iconWater.png`,
    ],
    electric: [
      "var(--colorTypeElectric)",
      "var(--colorTypeElectricLight)",
      `${basePath}iconElectric.png`,
    ],
    grass: [
      "var(--colorTypeGrass)",
      "var(--colorTypeGrassLight)",
      `${basePath}iconGrass.png`,
    ],
    ice: [
      "var(--colorTypeIce)",
      "var(--colorTypeIceLight)",
      `${basePath}iconIce.png`,
    ],
    fighting: [
      "var(--colorTypeFighting)",
      "var(--colorTypeFightingLight)",
      `${basePath}iconFighting.png`,
    ],
    poison: [
      "var(--colorTypePoison)",
      "var(--colorTypePoisonLight)",
      `${basePath}iconPoison.png`,
    ],
    ground: [
      "var(--colorTypeGround)",
      "var(--colorTypeGroundLight)",
      `${basePath}iconGround.png`,
    ],
    flying: [
      "var(--colorTypeFlying)",
      "var(--colorTypeFlyingLight)",
      `${basePath}iconFlying.png`,
    ],
    psychic: [
      "var(--colorTypePsychic)",
      "var(--colorTypePsychicLight)",
      `${basePath}iconPsychic.png`,
    ],
    bug: [
      "var(--colorTypeBug)",
      "var(--colorTypeBugLight)",
      `${basePath}iconBug.png`,
    ],
    rock: [
      "var(--colorTypeRock)",
      "var(--colorTypeRockLight)",
      `${basePath}iconRock.png`,
    ],
    ghost: [
      "var(--colorTypeGhost)",
      "var(--colorTypeGhostLight)",
      `${basePath}iconGhost.png`,
    ],
    dragon: [
      "var(--colorTypeDragon)",
      "var(--colorTypeDragonLight)",
      `${basePath}iconDragon.png`,
    ],
    dark: [
      "var(--colorTypeDark)",
      "var(--colorTypeDarkLight)",
      `${basePath}iconDark.png`,
    ],
    steel: [
      "var(--colorTypeSteel)",
      "var(--colorTypeSteelLight)",
      `${basePath}iconSteel.png`,
    ],
    fairy: [
      "var(--colorTypeFairy)",
      "var(--colorTypeFairyLight)",
      `${basePath}iconFairy.png`,
    ],
  };

  const filteredRequest = typePokemon.map((type) => {
    return colorAndImageMapping[type.trim().toLowerCase()] || null;
  });

  return {
    filteredRequest,
  };
};

export const mappingIconTypes = (typesIcon) => {
  // Corrigido: `typesIcon` é um array
  return typesIcon
    .map((type, index) => {
      const { filteredRequest } = funcUtilitiesStyleMapping(typesIcon);
      const icon = filteredRequest[index] ? filteredRequest[index][2] : ""; // Pega o caminho do ícone
      return icon
        ? `<img src="${icon}" alt="Tipo ${type}" class="pokemon-type-icon">`
        : ""; // Retorna a tag img
    })
    .join(""); // Junta as tags <img>
};

export const mappingLinearNameTypesColor = (typesLinearColorName) => {
  // A função funcUtilitiesStyleMapping retorna um array com [cor_escura, cor_clara, icone]
  // Para o gradiente linear, precisamos das duas cores (escura e clara).
  const { filteredRequest } = funcUtilitiesStyleMapping(typesLinearColorName);

  // Se houver apenas um tipo, usaremos a mesma cor para o início e fim do gradiente.
  const firstColor = filteredRequest[0] ? filteredRequest[0][0] : "#777"; // Cor escura do primeiro tipo
  const secondColor = filteredRequest[1] ? filteredRequest[1][1] : firstColor; // Cor clara do segundo tipo, ou a mesma do primeiro se só houver um

  return `
    background: linear-gradient(to right, ${firstColor} 0%, ${secondColor} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `;
};

export const mappingStrTypesColor = (typesString) => {
  return typesString
    .map((type, index) => {
      const { filteredRequest } = funcUtilitiesStyleMapping(typesString);
      const color = filteredRequest[index] ? filteredRequest[index][0] : "#777";
      return `<span style="color: ${color};">${type}</span>`;
    })
    .join(" / ");
};

export const mappingBackgroundLinearTypesColor = (typesString) => {
  const { filteredRequest } = funcUtilitiesStyleMapping(typesString);

  const firstColor = filteredRequest[0] ? filteredRequest[0][1] : "#777"; 
  const secondColor = filteredRequest[1] ? filteredRequest[1][1] : "black"; 

  return `
        background: ${firstColor};
        background: linear-gradient(to top,${firstColor} 0%, ${secondColor} 150%);
      `;
};
export const mappingBoxShadowAnimationTypesColor = (typesString) => {
  const { filteredRequest } = funcUtilitiesStyleMapping(typesString);

  const firstColorLight = filteredRequest[0] ? filteredRequest[0][0] : "var(--colorDefaultLight)";
  const secondColorLight = filteredRequest[1] ? filteredRequest[1][0] : "white";

  return `
    animation: boxsShadowAnimation 3s linear infinite;
    --firstColorShadow: ${firstColorLight};
    --secondColorShadow: ${secondColorLight};
  `;
};
