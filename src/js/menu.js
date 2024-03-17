import refs from "./refs.js";

const { openMenuBTN, menu } = refs;

const handleOpenMenu = () => {
  menu.classList.remove("swing-out-top-fwd");
  menu.classList.add("open");
};

const handleMenuClose = ({ target }) => {
  const isTargetCloseElement = target.closest("a, svg, button") !== null;

  menu.classList.add("swing-out-top-fwd", isTargetCloseElement);
  setTimeout(() => {
    menu.classList.remove("open");
  }, 1000);
};

openMenuBTN.addEventListener("click", handleOpenMenu);

menu.addEventListener("click", handleMenuClose);
