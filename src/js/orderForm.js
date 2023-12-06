const orderFormEl = document.getElementById("order-form");
const inputsEl = document.querySelectorAll("#order-form-input");
const errorMessagesEl = document.querySelectorAll(".order-form__error-message");
const errorFormMessage = document.querySelector(".error__message-pop-up");
const backdrop = document.getElementById("backdrop");

let error = null;

const regexPatterns = {
  name: /^[a-zA-Z0-9\s]{2,}$/,
  mail: /^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,
  phone: /^\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})$/,
};

const resetForm = () => {
  inputsEl.forEach((input) => {
    input.value = "";
  });
};

const handleInputChange = ({ target: { value, name } }) => {
  errorMessagesEl.forEach((message) => {
    if (value.trim() === "" && message.id === name) {
      message.classList.add("open");
      error = !error;
    } else if (message.id === name) {
      const isValid = value.match(regexPatterns[name]);
      message.classList[isValid ? "remove" : "add"]("open");
      if (isValid) error = false;
    }
  });
};
inputsEl.forEach((i) => i.addEventListener("input", handleInputChange));
inputsEl.forEach((i) => i.addEventListener("blur", handleInputChange));

const handleFormSubmit = (e) => {
  e.preventDefault();
  if (error) errorFormMessage.style.display = "block";
  else if (error === false) {
    resetForm();
    backdrop.classList.remove("openModal");
    document.body.style.overflow = "scroll";
    alert(
      "Your order details have been successfully submitted. Please await contact from our operator. Have a great day!"
    );
  }
};

orderFormEl.addEventListener("submit", handleFormSubmit);
