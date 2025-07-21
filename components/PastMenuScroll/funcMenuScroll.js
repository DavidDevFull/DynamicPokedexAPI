import {funcElemental, funcOpenCloseMenu, funcPageFavorite } from "./funcLblInteraction.js";

export const funcMenuScroll = (inserirInTag) => {

  const bodyMenuScroll = document.createElement("aside");
  bodyMenuScroll.className = "bodyMenuScroll";

  // Criar vários labels com parâmetros diferentes
  const labels = [
    funcElemental(),
    funcOpenCloseMenu(),
    funcPageFavorite()
  ];

  // Adicionar todos os labels no container
  labels.forEach(label => bodyMenuScroll.appendChild(label));

  inserirInTag.appendChild(bodyMenuScroll);
};