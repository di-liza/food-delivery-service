const updateErrorState = (input) => {
  const name = input.name;
  const errorMessages = document.querySelectorAll(
    `[data-error-type="${name}"]`
  );

  errorMessages.forEach((message) => {
    const isValid =
      input.value.trim() !== "" && input.value.match(regexPatterns[name]);

    message.classList.toggle("order-form__error-message--show", !isValid);
    input.classList.toggle("input--error", !isValid);
  });

  submitBtn.classList.toggle("order-form__submit--error", error);
  errorFormMessage.classList.toggle("error__message-pop-up--show", error);
};

export default updateErrorState;
