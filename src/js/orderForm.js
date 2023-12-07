import refs from "./refs.js";
import regexPatterns from "./regexPatterns.js";
import updateErrorState from "./updateErrorState.js";

const { orderFormEl, orderFormInputs, errorFormMessage, backdrop, submitBtn } =
  refs;

let error = false;

const resetForm = () => {
  orderFormInputs.forEach((input) => {
    input.value = "";
  });
};

const handleInputEvent = ({ target }) => {
  const { value, name } = target;
  if (value.trim() === "") {
    error = true;
    target.classList.add("input--error");
  } else {
    const isValid = value.match(regexPatterns[name]);
    target.classList.toggle("input--error", !isValid);
    error = !isValid;
  }
  updateErrorState(target);
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  const isFormFilled = [...orderFormInputs].every(
    (input) => input.value.trim() !== ""
  );

  if (!isFormFilled) error = true;

  errorFormMessage.classList.toggle("error__message-pop-up--show", error);
  submitBtn.classList.toggle("order-form__submit--error", error);

  if (!error && isFormFilled) {
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
orderFormInputs.forEach((input) => {
  input.addEventListener("input", handleInputEvent);
  input.addEventListener("blur", handleInputEvent);
});
