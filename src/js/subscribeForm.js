import refs from "./refs.js";

const { subscriveFormEl } = refs;

const handleFormSubmit = (e) => {
  e.preventDefault();
};

subscriveFormEl.forEach((form) =>
  form.addEventListener("submit", handleFormSubmit)
);
