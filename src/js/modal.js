import refs from "./refs.js";

const { modal, orderBtn, backdrop, closeModalBtn } = refs;

const handleOpenModal = () => {
  modal.classList.replace("animate__zoomOut", "animate__zoomIn");
  backdrop.classList.add("openModal");
  document.body.style.overflow = "hidden";
};

const handleCloseModal = ({ target, currentTarget, code }) => {
  modal.classList.replace("animate__zoomIn", "animate__zoomOut");
  const closeBtnEl = target.closest("#close-modal");

  setTimeout(() => {
    if (
      target === currentTarget ||
      code === "Escape" ||
      currentTarget === closeBtnEl
    ) {
      backdrop.classList.remove("openModal");
      document.body.style.overflow = "scroll";
    }
  }, 500);
};

orderBtn.forEach((btn) => btn.addEventListener("click", handleOpenModal));
closeModalBtn.addEventListener("click", handleCloseModal);
backdrop.addEventListener("click", handleCloseModal);
window.addEventListener("keydown", handleCloseModal);
