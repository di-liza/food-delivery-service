import refs from "./refs.js";

const { openMenuBTN, closeMenuBTN, menuConatiner } = refs;

const menu = document.querySelector(".mob-menu");

const handleOpenMenu = () => {
  menu.classList.add("open");
  menu.classList.add("swing-in-top-bck");
  menu.classList.remove("swing-out-top-fwd");
};

const handleCloseMenu = () => {
  menu.classList.remove("swing-in-top-bck");
  menu.classList.add("swing-out-top-fwd");

  const isMenuHasCloseClass = menu.classList.contains("swing-out-top-fwd");

  if (isMenuHasCloseClass) {
    setTimeout(() => {
      menu.classList.remove("open");
    }, 1000);
  }
};

openMenuBTN.addEventListener("click", handleOpenMenu);
closeMenuBTN.addEventListener("click", handleCloseMenu);

menuConatiner.addEventListener("click", ({ target }) => {
  console.log("target:", target);
  if (target.matches("a") || target.matches("svg")) {
    handleCloseMenu();
  }
});
