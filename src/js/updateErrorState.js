import refs from "./refs";
import regexPatterns from "./regexPatterns";

const { submitBtn, inputFormatErrorMessage, requiredFieldErrorMessage } = refs;

const updateErrorState = (input, submit = false) => {
  const name = input.name;
  const errorMessages = document.querySelectorAll(
    `[data-error-type="${name}"]`
  );
  errorMessages.forEach((message) => {
    const inputValidationErrorMessage = inputFormatErrorMessage(message);
    const inputEmptyErrorlMessage = requiredFieldErrorMessage(message);

    const isValid =
      !!input.value.trim() && input.value.match(regexPatterns[name]);

    message.classList.toggle("order-form__error-message--show", !isValid);

    inputEmptyErrorlMessage.classList.toggle(
      "order-form__error-message-empty--show",
      !isValid && submit
    );
    inputValidationErrorMessage.classList.toggle(
      "order-form__error-message-validation--show",
      !isValid && !submit
    );

    input.classList.toggle("input--error", !isValid);
    input.classList.toggle("input--success", isValid);
    submitBtn.classList.toggle("order-form__submit--error", !isValid);
  });
};

export default updateErrorState;
