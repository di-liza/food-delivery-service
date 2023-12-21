import refs from "./refs.js";

const { modal, orderBtn, backdrop, closeModalBtn } = refs;

const handleOpenModal = () => {
  modal.classList.add("active");
  backdrop.classList.add("openModal");
  document.body.style.overflow = "hidden";
};

const handleCloseModal = ({ target, currentTarget, code }) => {
  const closeBtnEl = target.closest("#close-modal");
  modal.classList.remove("active");

  if (
    target === currentTarget ||
    code === "Escape" ||
    currentTarget === closeBtnEl
  ) {
    backdrop.classList.remove("openModal");
    document.body.style.overflow = "scroll";
  }
};

console.log([...orderBtn].map((btn) => btn));
console.log(document.querySelector(".js-orderBtn-ts"));

[...orderBtn].map((btn) => {
  btn.addEventListener("click", handleOpenModal);
});
closeModalBtn.addEventListener("click", handleCloseModal);
backdrop.addEventListener("click", handleCloseModal);
window.addEventListener("keydown", handleCloseModal);

document.querySelector(".openPopup").addEventListener("click", () => {
  document.querySelector(".popup").classList.add("acrivepop");
});
