import refs from "./refs.js";
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
  errorFormMessage.classList.remove("error__message-pop-up--show", error);
  const { value } = target;
  !!value.trim() ? (error = true) : (error = false);
  updateErrorState(error, target);
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  const isInputsFill = [...orderFormInputs].every(
    (input) => input.value.trim() !== ""
  );
  error = !isInputsFill;

  errorFormMessage.classList.toggle("error__message-pop-up--show", error);
  submitBtn.classList.toggle("order-form__submit--error", error);

  orderFormInputs.forEach((input) => {
    input.classList.toggle("input--error", error);
    updateErrorState(error, input, true);
  });

  if (!error) {
    errorFormMessage.classList.remove("error__message-pop-up--show");
    submitBtn.classList.remove("order-form__submit--error");
    backdrop.classList.remove("openModal");
    document.body.style.overflow = "scroll";
    console.log(
      '"Your order details have been successfully submitted. Please await contact from our operator. Have a great day!"'
    );
    resetForm();
  }
};

orderFormEl.addEventListener("submit", handleFormSubmit);
orderFormInputs.forEach((input) => {
  input.addEventListener("input", handleInputEvent);
  input.addEventListener("blur", handleInputEvent);
});
