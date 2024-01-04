import refs from "./refs.js";
import updateErrorState from "./updateErrorState.js";

const {
  popUp,
  orderFormEl,
  orderFormInputs,
  errorFormMessage,
  backdrop,
  submitBtn,
} = refs;

let error = false;

const handleInputEvent = ({ target }) => {
  errorFormMessage.classList.remove("error__message-pop-up--show");
  !!target.value.trim() ? (error = true) : (error = false);
  updateErrorState(target);
};

const resetForm = () => {
  orderFormInputs.forEach((input) => {
    input.value = "";
  });
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
    updateErrorState(input, true);
  });

  if (!error) {
    errorFormMessage.classList.remove("error__message-pop-up--show");
    submitBtn.classList.remove("order-form__submit--error");
    backdrop.classList.remove("openModal");
    document.body.style.overflow = "scroll";

    popUp.classList.add("pop-up--show");
    resetForm();
  }
};

orderFormEl.addEventListener("submit", handleFormSubmit);
orderFormInputs.forEach((input) => {
  input.addEventListener("input", handleInputEvent);
  input.addEventListener("blur", handleInputEvent);
});
