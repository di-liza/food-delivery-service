const subscriveFormEl = document.querySelectorAll("#subscribe-form");

const handleFormSubmit = (e) => {
  e.preventDefault();
};

subscriveFormEl.forEach((form) =>
  form.addEventListener("submit", handleFormSubmit)
);
