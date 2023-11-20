const orderBtn = document.querySelectorAll("#order-btn");
const backdrop = document.getElementById("backdrop");
const closeModalBtn = document.getElementById("close-modal");

const handleOpenModal = () => {
  backdrop.classList.add("openModal");
  document.body.style.overflow = "hidden";
};
const handleCloseModal = ({ code }) => {
  backdrop.classList.remove("openModal");
  document.body.style.overflow = "scroll";
  code === "Escape" && backdrop.classList.remove("openModal");
};

orderBtn.forEach((btn) => btn.addEventListener("click", handleOpenModal));
closeModalBtn.addEventListener("click", handleCloseModal);
backdrop.addEventListener("click", handleCloseModal);
window.addEventListener("keydown", handleCloseModal);
