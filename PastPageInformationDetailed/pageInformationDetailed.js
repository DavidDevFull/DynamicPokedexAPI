import {
  fetchPokemonData,
  openPokemonDetailPage,
} from "../components/PastUtilitiesObjectAndFunction/funcSearchPokemonInputAndCard.js";
import { utiliFuncCollisionComponentesTopBottom } from "../components/PastUtilitiesObjectAndFunction/funcUtilitiesColisionComponents.js";

import { funcIpnSearchPokemon } from "../components/PastIpnSearchPokemon/funcIpnSearchPokemon.js";
import { funcCardPokemon } from "../components/PastCardPokemon/funcCardPokemon.js";
import { funcMenuScroll } from "../components/PastMenuScroll/funcMenuScroll.js";
import { funcSumAboutPokemon } from "../components/PastSumAboutPokemon/funcSumAboutPokemon.js";
import { funcSectionComparePokemon } from "../components/PastSumAboutPokemon/funcSectionComparePokemon.js";

funcIpnSearchPokemon(document.getElementById("headerSearch"), async (value) => {
  const data = await fetchPokemonData(value);
  openPokemonDetailPage(data);
  console.log(data, "Também executei outra ação!");
});
funcMenuScroll(document.getElementById("secGlobalElements"));
funcSumAboutPokemon(document.getElementById("divDetailPokemon"));
funcSectionComparePokemon(document.getElementById("divComparePokemon"));

//Sujestão aleatória
const limit = 1;
const maxOffset = 649 - limit;

for (let cont = 0; cont < 1; cont++) {
  (async () => {
    let numberRandom = Math.floor(Math.random() * maxOffset);
    const data = await fetchPokemonData(numberRandom);
    console.log(numberRandom, data);

    funcCardPokemon(
      document.getElementById("divSuggestionRandomPokemon"),
      data
    );
  })();
}

// Esconder e mostrando aba de pesquisa
let lastScrollTop = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  utiliFuncCollisionComponentesTopBottom(
    document.getElementById("headerSearch"),
    document.querySelector(".bodyMenuScroll")
  );

  if (currentScroll <= lastScrollTop) {
    document.getElementById("headerSearch").style.top = "0px";
  } else {
    const observeHeader =
      document.getElementById("headerSearch").getBoundingClientRect().bottom +
      window.scrollY;
    observeHeader >= 200
      ? (document.getElementById("headerSearch").style.top = "-100px")
      : console.info("Está no topo e não vi ser escondido");
  }

  // Atualiza o valor do scroll anterior
  lastScrollTop = currentScroll;
});
