const params = new URLSearchParams(window.location.search);

const fetchPokemonDescription = async (pokemonIdStr) => {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonIdStr}/`
    );
    if (!res.ok) {
      console.log(`Requisição ${res.status}`);
      return null;
    }

    const data = await res.json();
    // Tenta pegar em português
    let descriptionEntry = data.flavor_text_entries.find(
      (entry) => entry.language.name === "pt"
    );

    // Se não tiver, pega em inglês
    if (!descriptionEntry) {
      descriptionEntry = data.flavor_text_entries.find(
        (entry) => entry.language.name === "en"
      );
    }

    return descriptionEntry
      ? descriptionEntry.flavor_text
      : "Descrição não disponível.";
  } catch (error) {
    console.error("Erro ao buscar descrição:", error);
    return null;
  }
};

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

console.log(pokemon);

export const funcSumAboutPokemon = async (inserirInTag) => {
  const description = await fetchPokemonDescription(pokemon.id);

  const sumAboutPokemon = document.createElement("section");
  sumAboutPokemon.className = "styleSumAboutPokemon";

  sumAboutPokemon.innerHTML = `
    <div class="divImgNamePokemon">
      <div><h2>${pokemon.name} | #${pokemon.id}</h2></div>
      <img src="${pokemon.img}">
    </div>
    
    <div class="divInformationPokemon">
      <p>${description}</p>
    </div>

    <div class="divInformatoinStats">
      <span>🧡HP: ${pokemon.hp}</span>
      <span>🏹Atack: ${pokemon.attack}</span>
      <span>🛡Defesa: ${pokemon.defense}</span>
      <span>📏Altura: ${pokemon.height}</span>
      <span>⚖Peso: ${pokemon.weight}</span>

    </div>
  `;

  inserirInTag.appendChild(sumAboutPokemon);
};
