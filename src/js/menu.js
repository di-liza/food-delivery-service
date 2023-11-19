const openMenuBTN = document.getElementById("menu-open-btn");
const closeMenuBTN = document.getElementById("mob-menu-close-btn");

const menu = document.querySelector(".mob-menu");

const handleOpenMenu = () => menu.classList.add("open");

const handleCloseMenu = ({ target }) =>
  target.matches("a") ||
  (target.matches("svg") && menu.classList.remove("open"));

openMenuBTN.addEventListener("click", handleOpenMenu);
closeMenuBTN.addEventListener("click", handleCloseMenu);
