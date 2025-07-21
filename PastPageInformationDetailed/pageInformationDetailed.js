import {
  fetchPokemonData,
  openPokemonDetailPage,
} from "../components/PastUtilitiesObjectAndFunction/funcSearchPokemonInputAndCard.js";

import { funcIpnSearchPokemon } from "../components/PastIpnSearchPokemon/funcIpnSearchPokemon.js";
import { funcCardPokemon } from "../components/PastCardPokemon/funcCardPokemon.js";
import { funcMenuScroll } from "../components/PastMenuScroll/funcMenuScroll.js";
import { funcSumAboutPokemon } from "../components/PastSumAboutPokemon/funcSumAboutPokemon.js";

funcIpnSearchPokemon(document.getElementById("headerSearch"), async (value) => {
  const data = await fetchPokemonData(value);
  openPokemonDetailPage(data);
  console.log(data, "Também executei outra ação!");
});
funcMenuScroll(document.getElementById("secGlobalElements"));
funcSumAboutPokemon(document.getElementById("divDetailPokemon"));

//Sujestão aleatória
const limit = 1;
const maxOffset = 649 - limit;

const generatorNumberRamdom = async () => {
  let numberRandom = Math.floor(Math.random() * maxOffset);
  const data = await fetchPokemonData(numberRandom);
  console.log(numberRandom, data);

  funcCardPokemon(document.getElementById("divSuggestionRandomPokemon"), data);
};
for (let cont = 0; cont < 25; cont++) {
  generatorNumberRamdom();
}
// Esconder e mostrando aba de pesquisa
let lastScrollTop = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  // Esconder e mostrando aba de pesquisa
  if (currentScroll == 0) {
    document.querySelector("header").style.top = "0px";
    document.querySelector(".bodyMenuScroll").style.paddingTop = "0.6rem";
  } else {
    // Detecta se o usuário está rolando para cima ou para baixo
    if (currentScroll < lastScrollTop) {
      console.info("🆙 Scroll para CIMA - Mostrar Header");
      // Aqui você pode ativar o header, por exemplo:
      document.querySelector("header").style.top = "0px";
      document.querySelector(".bodyMenuScroll").style.paddingTop = "110px";
    } else {
      console.info("🔽 Scroll para BAIXO - Esconder Header");
      // Aqui você pode ocultar o header:
      document.querySelector("header").style.top = "-200px"; // ou use uma classe CSS
      document.querySelector(".bodyMenuScroll").style.paddingTop = "0.6rem";
    }
  }
  // Atualiza o valor do scroll anterior
  lastScrollTop = currentScroll;
});
