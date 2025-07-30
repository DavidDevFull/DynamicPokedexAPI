export const funcIpnSearchPokemon = (
  inserirInTag,
  callbacks,
  placeholder = "Buscar pokémon pelo número ou nome"
) => {
  if (!Array.isArray(callbacks)) {
    callbacks = [callbacks];
  }

  const ipnSearchPokemon = document.createElement("input");
  ipnSearchPokemon.placeholder = placeholder;
  ipnSearchPokemon.className = "ipnSearchPokemon";
  ipnSearchPokemon.type = "text";

  async function handleSearch() {
    // Pega o valor da caixa de texto e caso não tenha retorna vazio.
    const value = ipnSearchPokemon.value.trim();
    if (!value) return;

    for (const callback of callbacks) {
      await callback(value);
    }
  }
  // Precionando enter texto irá pesquisar.
  ipnSearchPokemon.addEventListener("keypress", async (event) => {
    if (event.key === "Enter") {
      await handleSearch();
      ipnSearchPokemon.value = "";
    }
  });
  // Tirando o cursor da caixa de texto irá pesquisar.
  ipnSearchPokemon.addEventListener("blur", async () => {
    await handleSearch();
    ipnSearchPokemon.value = "";
  });

  inserirInTag.appendChild(ipnSearchPokemon);
};
