import refs from "./refs.js";

const {
  orderFormEl,
  inputsEl,
  errorMessagesEl,
  errorFormMessage,
  backdrop,
  submitBtn,
} = refs;

let error = false;

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
      message.classList.add("order-form__error-message--show");
      error = true;
      target.classList.add("input--error");
    } else if (message.id === name) {
      const isValid = value.match(regexPatterns[name]);
      message.classList[isValid ? "remove" : "add"](
        "order-form__error-message--show"
      );
      if (isValid) {
        error = false;
        target.classList.remove("input--error");
      }
    }
    if (error) submitBtn.classList.add("order-form__submit--error");
    else {
      errorFormMessage.classList.remove("error__message-pop-up--show");
      submitBtn.classList.remove("order-form__submit--error");
    }
  });
};
inputsEl.forEach((i) => i.addEventListener("input", handleInputChange));
inputsEl.forEach((i) => i.addEventListener("blur", handleInputChange));

const handleFormSubmit = (e) => {
  e.preventDefault();
  const isInputlsFiled = [...inputsEl].every(
    (input) => input.value.trim() !== ""
  );
  if (!isInputlsFiled) error = true;
  console.log("isInputlsFiled", isInputlsFiled);
  console.log("error", error);
  if (error && !isInputlsFiled) {
    errorFormMessage.classList.add("error__message-pop-up--show");
    submitBtn.classList.add("order-form__submit--error");
  } else if (!error || isInputlsFiled) {
    errorFormMessage.classList.remove("error__message-pop-up--show");
    submitBtn.classList.remove("order-form__submit--error");
    backdrop.classList.remove("openModal");
    document.body.style.overflow = "scroll";
    resetForm();
    // alert(
    //   "Your order details have been successfully submitted. Please await contact from our operator. Have a great day!"
    // );
  }
};

orderFormEl.addEventListener("submit", handleFormSubmit);
