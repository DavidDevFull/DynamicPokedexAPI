import {
  funcThemeChange,
  funcOpenCloseMenu,
  funcPageFavorite,
  funcReturnPageMain,
} from "./funcLblInteraction.js";

export const funcMenuScroll = (inserirInTag) => {
  const bodyMenuScroll = document.createElement("aside");
  bodyMenuScroll.className = "bodyMenuScroll";

  // Criar vários labels com parâmetros diferentes
  const labels = [
    funcThemeChange(),
    funcOpenCloseMenu(),
    funcPageFavorite(),
    funcReturnPageMain(),
  ];

  // Adicionar todos os labels no container
  labels.forEach((label) => bodyMenuScroll.appendChild(label));

  inserirInTag.appendChild(bodyMenuScroll);
};
