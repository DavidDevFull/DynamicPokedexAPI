import { searchAndOpenPokemon } from '../PastUtilitiesObjectAndFunction/funcSearchPokemonInputAndCard.js';

export const funcCardPokemon = (InsertTagIn, data) => {
  const bodyCard = document.createElement('section');
  bodyCard.className = 'cardPokemon';

  const typeColorMap = {
    fire:       'var(--colorTypeFire)',
    water:      'var(--colorTypeWater)',
    grass:      'var(--colorTypeGram)',
    flying:     'var(--colorTypeFlying)',
    fighting:   'var(--colorTypeFighter)',
    poison:     'var(--colorTypePoison)',
    electric:   'var(--colorTypeElectric)',
    ground:     'var(--colorTypeEarth)',
    psychic:    'var(--colorTypePsychic)',
    ice:        'var(--colorTypeIce)',
    bug:        'var(--colorTypeInsect)',
    ghost:      'var(--colorTypeGhost)',
    steel:      'var(--colorTypeSteel)',
    dragon:     'var(--colorTypeDragon)',
    dark:       'var(--colorTypeDingy)',
    fairy:      'var(--colorTypeFairy)',
    rock:       'var(--colorTypeEarth)',
    normal:     '#A8A77A',
  };


  const basePath = new URL("../../image/iconsTypePokemon/", import.meta.url).pathname;

  const typeImgMap = {
    dark:     `${basePath}iconDark.png`,
    dragon:   `${basePath}iconDragon.png`,
    electric: `${basePath}iconElectric.png`,
    fairy:    `${basePath}iconFairy.png`,
    fighting: `${basePath}iconFighting.png`,
    fire:     `${basePath}iconFire.png`,
    flying:   `${basePath}iconFlying.png`,
    ghost:    `${basePath}iconGhost.png`,
    grass:    `${basePath}iconGrass.png`,
    ground:   `${basePath}iconGround.png`,
    ice:      `${basePath}iconIce.png`,
    bug:      `${basePath}iconInsect.png`,
    normal:   `${basePath}iconNormal.png`,
    poison:   `${basePath}iconPoison.png`,
    psychic:  `${basePath}iconPsychic.png`,
    rock:     `${basePath}iconRock.png`,
    steel:    `${basePath}iconSteel.png`,
    water:    `${basePath}iconWater.png`,
  };

  const { name, id, img, types } = data;

  const firstType = types[0];
  const colorFirstType = typeColorMap[firstType];
  const iconfirst = typeImgMap[firstType];

  const secondType = types[1];
  const colorSecondColor = secondType ? typeColorMap[secondType] : "";
  const iconSecond = secondType ? typeImgMap[secondType] : "";

  // Monta dinamicamente os <img>
  const iconsHTML = `
    <img src="${iconfirst}">
    ${secondType ? `<img src="${iconSecond}">` : ""}
  `;

  // Monta o HTML
  bodyCard.innerHTML = `
    <figure class="imgNamePokemon">
      <figcaption><h2 class="pokemonName">${name} | #${id}</h2></figcaption>
      <img src="${img}" alt="${name}">
    </figure>
    <div class="infoTypeIconPokemon">
      <div>${iconsHTML}</div>
      <div>
        <span class="type1">${firstType}</span>
        ${secondType ? ` / <span class="type2">${secondType}</span>` : ""}
      </div>
    </div>
  `;

  // Aplica cor ao nome
  const nameElement = bodyCard.querySelector(".pokemonName");
  nameElement.style.color = colorFirstType;

  // Aplica cor ao span do primeiro tipo
  const spanType1 = bodyCard.querySelector(".type1");
  spanType1.style.color = colorFirstType;

  // Aplica cor ao span do segundo tipo, se existir
  const spanType2 = bodyCard.querySelector(".type2");
  if (spanType2) {
    spanType2.style.color = colorSecondColor;
  }

  // Evento de clique
  bodyCard.addEventListener("click", async () => {
    console.log(`Pokémon ${name} foi clicado`);
    await searchAndOpenPokemon(name);
  });

  InsertTagIn.appendChild(bodyCard);
};
