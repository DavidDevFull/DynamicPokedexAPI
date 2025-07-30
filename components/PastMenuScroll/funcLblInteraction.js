const basePath = new URL("../../image/iconMenu/", import.meta.url).pathname;

export const funcThemeChange = () => {
  const btnThemeChange = document.createElement("button");
  btnThemeChange.id = "btnThemeChange";
  const [iconDarkTheme, iconOfCourseTheme] = [
    `${basePath}icon_Theme_Dark.png`,
    `${basePath}icon_Theme_Of_Course.png`,
  ];
  const applyTheme = (isDark) => {
    if (isDark) {
      document.body.classList.add("dark_Theme");
      btnThemeChange.innerHTML = `<img src="${iconDarkTheme}" alt="Icon theme dark">`;
    } else {
      document.body.classList.remove("dark_Theme");
       btnThemeChange.innerHTML = `<img src="${iconOfCourseTheme}" alt="Icon theme of course">`;
    }
    console.log(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  // Inicializa o tema salvo
  const savedTheme = localStorage.getItem("theme");
  applyTheme(savedTheme === "dark");

  // Alternar tema ao clicar no botão
  btnThemeChange.addEventListener("click", () => {
    const isCurrentlyDark = document.body.classList.contains("dark_Theme");
    applyTheme(!isCurrentlyDark);
  });

  return btnThemeChange;
};

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark_Theme");
  }
});

export const funcOpenCloseMenu = () => {
  const btnMenu = document.createElement("button");
  btnMenu.id = "btnMenu";
  btnMenu.innerHTML = `<img src="${basePath}icon_Menu.png" alt="Menu">`;

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
  btnPageFavorite.innerHTML = `<img src="${basePath}Icon_Favorite_Pokemon.png" alt="Favorite">`;

  btnPageFavorite.addEventListener("click", () => {
    alert("👨🏻‍💻 Paginá de favoritar em desenvolvimento 🔥");
  });
  return btnPageFavorite;
};

export const funcReturnPageMain = () => {
  const btnReturnPageMain = document.createElement("button");
  btnReturnPageMain.id = "btnReturnPageMain";
  btnReturnPageMain.innerHTML = `<img src="${basePath}icon_Arrow.png" alt="Arrow">`;
  btnReturnPageMain.addEventListener("click", () => {
    window.open("/index.html", "_parent");
  });

  return btnReturnPageMain;
};
