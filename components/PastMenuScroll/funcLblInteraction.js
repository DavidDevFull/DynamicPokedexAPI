const basePath = new URL("../../image/iconMenu/", import.meta.url).pathname;


export const funcElemental = () => {
  const btnElemental = document.createElement("button");
  btnElemental.id = "btnMenu";
  btnElemental.innerHTML =
    `<img src="${basePath}iconElemental.png" alt="elements">`;
  btnElemental.addEventListener('click', () => {
    alert("👨🏻‍💻 Filtro de elemental em desenvolvimento 🔥");
  });

  return btnElemental;
};
export const funcOpenCloseMenu = () => {
  const btnMenu = document.createElement("button");
  btnMenu.id = "btnMenu";
  btnMenu.innerHTML = `<img src="${basePath}icon_Menu.png" alt="menu">`;

  let thisActive = true;
  btnMenu.addEventListener("click", () => {
    if (thisActive) {
      document.getElementById("asideInformationWebsite").style.width = "80%";
      console.info("Abrindo menu", thisActive);
      thisActive = false;
    } else {
      document.getElementById("asideInformationWebsite").style.width = "1px";
      console.info("Fechando menu", thisActive);
      thisActive = true;
    }
  });

  return btnMenu;
};
export const funcPageFavorite = () => {
  const btnPageFavorite = document.createElement("button");
  btnPageFavorite.id = "btnPageFavorite";
  btnPageFavorite.innerHTML =
    `<img src="${basePath}Icon_Favorite_Pokemon.png" alt="favorite">`;

  btnPageFavorite.addEventListener('click',() => {
    alert("👨🏻‍💻 Paginá de favoritar em desenvolvimento 🔥");
  });
  return btnPageFavorite;
};
