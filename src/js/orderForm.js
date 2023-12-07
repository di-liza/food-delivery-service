const orderFormEl = document.getElementById("order-form");
const inputsEl = document.querySelectorAll("#order-form-input");
const errorMessagesEl = document.querySelectorAll(".order-form__error-message");
const errorFormMessage = document.querySelector(".error__message-pop-up");
const backdrop = document.getElementById("backdrop");
const submitBtn = document.getElementById("order-submit-btn");

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

const handleInputChange = ({ target }) => {
  const { value, name } = target;
  if (value.trim() === "") error = true;
  errorMessagesEl.forEach((message) => {
    if (value.trim() === "" && message.id === name) {
      message.classList.add("open");
      error = true;
      target.classList.add("input--error");
    } else if (message.id === name) {
      const isValid = value.match(regexPatterns[name]);
      message.classList[isValid ? "remove" : "add"]("open");
      if (isValid) {
        error = false;
        target.classList.remove("input--error");
      }
    }
    if (error) submitBtn.classList.add("order-form__submit--error");
    else submitBtn.classList.remove("order-form__submit--error");
  });
};
inputsEl.forEach((i) => i.addEventListener("input", handleInputChange));
inputsEl.forEach((i) => i.addEventListener("blur", handleInputChange));

const isFormFilled = () => {
  let isFilled = false;

  inputsEl.forEach((input) => {
    if (input.required && input.value.trim() === "") {
      isFilled = true;
      input.classList.remove("input--error");
    } else {
      input.classList.add("input--error");
    }
  });

  return isFilled;
};
const handleFormSubmit = (e) => {
  const formFilled = isFormFilled();
  console.log("formFilled:", formFilled);
  e.preventDefault();
  if (error || !formFilled) {
    errorFormMessage.style.display = "block";
    submitBtn.classList.add("order-form__submit--error");
  } else if (error === false && formFilled) {
    resetForm();
    submitBtn.classList.remove("order-form__submit--error");
    backdrop.classList.remove("openModal");
    document.body.style.overflow = "scroll";
    alert(
      "Your order details have been successfully submitted. Please await contact from our operator. Have a great day!"
    );
  }
};

orderFormEl.addEventListener("submit", handleFormSubmit);
