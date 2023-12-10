import refs from "./refs.js";

const { orderBtn, backdrop, closeModalBtn } = refs;

const handleOpenModal = () => {
  backdrop.classList.add("openModal");
  document.body.style.overflow = "hidden";
};

const handleCloseModal = ({ target, currentTarget, code }) => {
  const closeBtnEl = target.closest("#close-modal");

  if (
    target === currentTarget ||
    code === "Escape" ||
    currentTarget === closeBtnEl
  ) {
    backdrop.classList.remove("openModal");
    document.body.style.overflow = "scroll";
  }
};

console.log("orderBtn:", orderBtn);
orderBtn.forEach((btn) => btn.addEventListener("click", handleOpenModal));
closeModalBtn.addEventListener("click", handleCloseModal);
backdrop.addEventListener("click", handleCloseModal);
window.addEventListener("keydown", handleCloseModal);
