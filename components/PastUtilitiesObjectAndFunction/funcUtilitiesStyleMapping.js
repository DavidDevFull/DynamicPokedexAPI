// Variável que pega a pasta base de cada icone de tipo do Pokemon
const basePath = new URL("../../image/iconsTypePokemon/", import.meta.url)
  .pathname;

// Função de objetos global de cores e icones de cada tipo.
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

  // Mapea e filtra de acordo com o parâmetro recebedo(Type) e retorna a cor e imagem.
  const filteredRequest = typePokemon.map((type) => {
    return colorAndImageMapping[type.trim().toLowerCase()] || null;
  });

  // Retorna um objeto para que possa ser comsumido de uma maneira mais versátil.
  return {
    filteredRequest,
  };
};

// Função responsável por receber um tipo ou dois de pokemon e retorar o icone respectivo.
export const mappingIconTypes = (typesIcon) => {
  return typesIcon
    .map((type, index) => {
      // Pega o objeto retornado e filtra com uma função utilitaria do tipo[] de pokemon.
      const { filteredRequest } = funcUtilitiesStyleMapping(typesIcon);
      // Caso exista 2 tipos return 2 tipos se não return apenas 1.
      const icon = filteredRequest[index] ? filteredRequest[index][2] : ""; // Pega o caminho do ícone
      return icon
        ? `<img src="${icon}" alt="Tipo ${type}" class="pokemon-type-icon">`
        : ""; 
    })
    .join("");
};

// Função responsável por reveber o tipo de pokemon e retornar estilo linear respctivo.
export const mappingLinearNameTypesColor = (typesLinearColorName) => {
  // Pega o objeto retornado e filtra com uma função utilitaria do tipo[] de pokemon.
  const { filteredRequest } = funcUtilitiesStyleMapping(typesLinearColorName);
  //Retorna tanto a cor nomal quanto uma cor mais clara.
   //Se existir 2 tipos, return 4 cores(normal e mais clara), pelo contrario apenas 2(um tipo).
  const firstColor = filteredRequest[0] ? filteredRequest[0][0] : ""; 
  const secondColor = filteredRequest[1] ? filteredRequest[1][1] : firstColor; 
  // Retorna um style que é aplicado direto no HTML
  return `
    background: linear-gradient(to right, ${firstColor} 0%, ${secondColor} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `;
};
// Mapeamento que retorna para cado nome do tipo uma unica cor não linear.
export const mappingStrTypesColor = (typesString) => {
  // Solicita um parametro(Array de tipos, é tratado direto no component[]).
  return typesString.map((type, index) => {
      // Pega o objeto retornado e filtra com uma função utilitaria do tipo[] de pokemon.
      const { filteredRequest } = funcUtilitiesStyleMapping(typesString);
      // Color aguarda a cor filtrada.
      const color = filteredRequest[index] ? filteredRequest[index][0] : 'var(--black)';
      // Estilo aplicado diretamente no HTML retornando também o nome do tipo.
      return `<span style="color: ${color};">${type}</span>`;
    })// Tydo separado com uma barra com o método join.
    .join(" / ");
};
// Mapeamento do fundo com cores lineares
export const mappingBackgroundLinearTypesColor = (typesString) => {
  // Pega o objeto retornado e filtra com uma função utilitaria do tipo[] de pokemon.
  const { filteredRequest } = funcUtilitiesStyleMapping(typesString);

  // Separa cada cor(usado as cores mais clara), mas de acordo com o array.
  const firstColor = filteredRequest[0] ? filteredRequest[0][1] : 'var(--black)';
  const secondColor = filteredRequest[1] ? filteredRequest[1][1] : 'var(--black)';

  // Retorna um estilo que é aplicado siretamente no HTML
  return `
    background: ${firstColor};
    background: linear-gradient(to top, ${firstColor} 0%, ${secondColor} 150%);
  `;
};
// Mapeamento de box-shadow com animação de cores
export const mappingBoxShadowAnimationTypesColor = (typesString) => {
  // Pega o objeto retornado e filtra com uma função utilitaria do tipo[] de pokemon.
  const { filteredRequest } = funcUtilitiesStyleMapping(typesString);
  // Separa cada cor(usado as cores mais escuras), mas de acordo com o array.
  const firstColorLight = filteredRequest[0] ? filteredRequest[0][0] : "var(--colorDefaultLight)";
  const secondColorLight = filteredRequest[1] ? filteredRequest[1][0] : filteredRequest[0][1] ;
  // Retorna um estilo que é aplicado diretamente no HTML.
  return `
    animation: boxsShadowAnimation 3s linear infinite;
    --firstColorShadow: ${firstColorLight};
    --secondColorShadow: ${secondColorLight};
  `;
};
