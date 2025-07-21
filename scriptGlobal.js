import {
  fetchPokemonData,
  openPokemonDetailPage,
} from "./components/PastUtilitiesObjectAndFunction/funcSearchPokemonInputAndCard.js";
import { funcLoadingScrollPokemon } from "./components/PastUtilitiesObjectAndFunction/funcLoadingScrollPokemon.js";

import { funcIpnSearchPokemon } from "./components/PastIpnSearchPokemon/funcIpnSearchPokemon.js";
import { funcMenuScroll } from "./components/PastMenuScroll/funcMenuScroll.js";

const limit = 25;
let offset = 0;
let isLoading = false;

funcIpnSearchPokemon(document.getElementById("headerSearch"), async (value) => {
  const data = await fetchPokemonData(value);
  openPokemonDetailPage(data);
  console.log(data, "Também executei outra ação!");
});

funcMenuScroll(document.getElementById("sectionContain"));

// Inicial-
await funcLoadingScrollPokemon(
  document.getElementById("divContainScrollInfinit"),
  offset,
  limit
);
offset += limit;

// Scroll
let lastScrollTop = 0; // Armazena a posição anterior do scroll

window.addEventListener("scroll", async () => {
  const currentScroll = window.scrollY;

  // Lógica para carregamento com scroll infinito
  if (
    window.innerHeight + currentScroll >= document.body.scrollHeight &&
    !isLoading
  ) {
    isLoading = true;
    await funcLoadingScrollPokemon(divContainScrollInfinit, offset, limit);
    offset += limit;
    isLoading = false;
  }
  // Esconder e mostrando aba de pesquisa
  if (currentScroll == 0) {
    document.getElementById("headerSearch").style.top = "0px";
    document.querySelector(".bodyMenuScroll").style.paddingTop = "0.6rem";
  }else{
        // Detecta se o usuário está rolando para cima ou para baixo
    if (currentScroll < lastScrollTop) {
      console.info("🆙 Scroll para CIMA - Mostrar Header");
      // Aqui você pode ativar o header, por exemplo:
      document.getElementById("headerSearch").style.top = "0px";
      document.querySelector(".bodyMenuScroll").style.paddingTop = "120px";
    } else {
      console.info("🔽 Scroll para BAIXO - Esconder Header");
      // Aqui você pode ocultar o header:
      document.getElementById("headerSearch").style.top = "-200px"; // ou use uma classe CSS
      document.querySelector(".bodyMenuScroll").style.paddingTop = "0.6rem";
    }
  }

  // Atualiza o valor do scroll anterior
  lastScrollTop = currentScroll;
});
