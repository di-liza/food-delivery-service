const orderBtn = document.querySelectorAll("#order-btn");
const backdrop = document.getElementById("backdrop");
const closeModalBtn = document.getElementById("close-modal");

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

orderBtn.forEach((btn) => btn.addEventListener("click", handleOpenModal));
closeModalBtn.addEventListener("click", handleCloseModal);
backdrop.addEventListener("click", handleCloseModal);
window.addEventListener("keydown", handleCloseModal);

/**
 * ||
    currentTarget.contains(closeBtnEl)
 */
