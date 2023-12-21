import refs from "./refs.js";

const { modal, orderBtn, backdrop, closeModalBtn } = refs;

const handleOpenModal = () => {
  modal.classList.add("active");
  backdrop.classList.add("openModal");
  backdrop.classList.remove("is-hidden");
  document.body.style.overflow = "hidden";
};

const handleCloseModal = ({ target, currentTarget, code }) => {
  const closeBtnEl = target.closest("#close-modal");

  if (
    target === currentTarget ||
    code === "Escape" ||
    currentTarget === closeBtnEl
  ) {
    modal.classList.remove("active");
    backdrop.classList.remove("openModal");
    backdrop.classList.add("is-hidden");
    document.body.style.overflow = "scroll";
  }
};

orderBtn.forEach((btn) => {
  btn.addEventListener("click", handleOpenModal);
});
closeModalBtn.addEventListener("click", handleCloseModal);
backdrop.addEventListener("click", handleCloseModal);
window.addEventListener("keydown", handleCloseModal);
