import {
  fetchPokemonData,
  openPokemonDetailPage,
} from "./components/PastUtilitiesObjectAndFunction/funcSearchPokemonInputAndCard.js";
import { funcLoadingScrollPokemon } from "./components/PastUtilitiesObjectAndFunction/funcLoadingScrollPokemon.js";
import { funcIpnSearchPokemon } from "./components/PastIpnSearchPokemon/funcIpnSearchPokemon.js";
import { funcMenuScroll } from "./components/PastMenuScroll/funcMenuScroll.js";

const limit = 10;
let offset = 0;
let isLoading = false;

funcIpnSearchPokemon(document.getElementById("headerSearch"), async (value) => {
  const data = await fetchPokemonData(value);
  openPokemonDetailPage(data);
  console.log(data, "Também executei outra ação!");
});

funcMenuScroll(document.getElementById("sectionContain"));

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
    await funcLoadingScrollPokemon(
      document.getElementById("divContainScrollInfinit"),
      offset,
      limit
    );
    offset += limit;
    isLoading = false;
  }

  if (currentScroll <= lastScrollTop) {
    console.log("Scrool rolado para cima");
    document.getElementById("headerSearch").style.top = "0px";
  } else {
    console.log("Scroll rolado para baixo");
    const observeHeader =
      document.getElementById("headerSearch").getBoundingClientRect().bottom +
      window.scrollY;
    observeHeader >= 325
      ? (document.getElementById("headerSearch").style.top = "-115px")
      : console.info("Está no topo e não vai ser escondido");
    if (observeHeader >= 325) {
    }
  }

  // Atualiza o valor do scroll anterior
  lastScrollTop = currentScroll;
});
