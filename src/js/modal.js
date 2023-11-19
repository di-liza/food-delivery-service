const orderBtn = document.getElementById("order-btn");
const backdrop = document.getElementById("backdrop");

const handleOpenModal = (e) => {
  console.log("click");
  backdrop.classList.add("openModal");
};

orderBtn.addEventListener("click", handleOpenModal);
