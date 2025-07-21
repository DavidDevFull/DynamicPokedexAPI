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
    const value = ipnSearchPokemon.value.trim();
    if (!value) return;

    for (const callback of callbacks) {
      await callback(value);
    }
  }

  ipnSearchPokemon.addEventListener("keypress", async (event) => {
    if (event.key === "Enter") {
      await handleSearch();
      ipnSearchPokemon.value = "";
    }
  });

  ipnSearchPokemon.addEventListener("blur", async () => {
    await handleSearch();
    ipnSearchPokemon.value = "";
  });

  inserirInTag.appendChild(ipnSearchPokemon);
};
