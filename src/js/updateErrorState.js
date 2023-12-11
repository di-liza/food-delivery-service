import refs from "./refs";
import regexPatterns from "./regexPatterns";

const { submitBtn } = refs;

const updateErrorState = (error, input, submit) => {
  const name = input.name;
  const errorMessages = document.querySelectorAll(
    `[data-error-type="${name}"]`
  );
  errorMessages.forEach((message) => {
    const isValid =
      !!input.value.trim() && input.value.match(regexPatterns[name]);

    message.classList.toggle("order-form__error-message--show", !isValid);
    input.classList.toggle("input--error", !isValid);
    error = !isValid;
  });

  submitBtn.classList.toggle("order-form__submit--error", error);

  if (submit) {
  }
};

export default updateErrorState;
