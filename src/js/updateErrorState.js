import refs from "./refs";
import regexPatterns from "./regexPatterns";

const { submitBtn, validErrorMessage, isEmptyErrorMessage } = refs;

const updateErrorState = (error, input, submit = false) => {
  const name = input.name;
  const errorMessages = document.querySelectorAll(
    `[data-error-type="${name}"]`
  );
  errorMessages.forEach((message) => {
    const validationMessage = validErrorMessage(message);
    const additionalMessage = isEmptyErrorMessage(message);

    const isValid =
      !!input.value.trim() && input.value.match(regexPatterns[name]);

    message.classList.toggle("order-form__error-message--show", !isValid);

    additionalMessage.classList.toggle(
      "order-form__error-message-empty--show",
      !isValid && submit
    );
    validationMessage.classList.toggle(
      "order-form__error-message-validation--show",
      !isValid && !submit
    );

    input.classList.toggle("input--error", !isValid);
    error = !isValid;
  });

  submitBtn.classList.toggle("order-form__submit--error", error);
};

export default updateErrorState;
