const orderFormEl = document.getElementById("order-form");
const inputsEl = document.querySelectorAll("#order-form-input");

const handleInputChange = ({ target: { value } }) => {
  console.log("value:", value);
  // console.log("e:", e);
};
inputsEl.forEach((i) => i.addEventListener("input", handleInputChange));

const handleFormSubmit = (e) => {
  e.preventDefault();
};

orderFormEl.addEventListener("submit", handleFormSubmit);
