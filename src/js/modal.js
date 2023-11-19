const orderBtn = document.getElementById("order-btn");
const backdrop = document.getElementById("backdrop");
const closeModalBtn = document.getElementById("close-modal");

const handleOpenModal = (e) => {
  backdrop.classList.add("openModal");
};
const handleCloseModal = (e) => {
  backdrop.classList.remove("openModal");
};

orderBtn.addEventListener("click", handleOpenModal);
closeModalBtn.addEventListener("click", handleCloseModal);
