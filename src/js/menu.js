const openMenuBTN = document.getElementById("menu-open-btn");
console.log("openMenuBTN:", openMenuBTN);
const closeMenuBTN = document.getElementById("mob-menu-close-btn");
console.log("closeMenuBTN:", closeMenuBTN);

const menu = document.querySelector(".mob-menu");
console.log("menu:", menu);

const handleOpenMenu = () => menu.classList.add("open");

const handleCloseMenu = ({ target }) =>
  target.matches("a") ||
  (target.matches("svg") && menu.classList.remove("open"));

openMenuBTN.addEventListener("click", handleOpenMenu);
closeMenuBTN.addEventListener("click", handleCloseMenu);
