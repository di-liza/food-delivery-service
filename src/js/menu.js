import refs from "./refs.js";

const { openMenuBTN, closeMenuBTN } = refs;

const menu = document.querySelector(".mob-menu");

const handleOpenMenu = () => {
  menu.classList.add("open");
  menu.classList.remove("swing-out-top-bck");
  menu.classList.add("swing-in-top-bck");
};

const handleCloseMenu = ({ target }) => {
  if (target.matches("a") || target.matches("svg")) {
    // menu.classList.remove("swing-in-top-bck");
    menu.classList.add("swing-out-top-bck");
    menu.classList.remove("open");
  }
};

openMenuBTN.addEventListener("click", handleOpenMenu);
closeMenuBTN.addEventListener("click", handleCloseMenu);
