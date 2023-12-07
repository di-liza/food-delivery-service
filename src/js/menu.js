import refs from "./refs.js";

const { openMenuBTN, closeMenuBTN } = refs;

const menu = document.querySelector(".mob-menu");

const handleOpenMenu = () => menu.classList.add("open");

const handleCloseMenu = ({ target }) =>
  target.matches("a") ||
  (target.matches("svg") && menu.classList.remove("open"));

openMenuBTN.addEventListener("click", handleOpenMenu);
closeMenuBTN.addEventListener("click", handleCloseMenu);
