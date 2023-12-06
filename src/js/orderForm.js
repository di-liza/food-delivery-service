const orderFormEl = document.getElementById("order-form");
const inputsEl = document.querySelectorAll("#order-form-input");
const errorMessagesEl = document.querySelectorAll(".order-form__error-message");
const errorFormMessage = document.querySelector(".error__message-pop-up");
console.log("errorFormMessage:", errorFormMessage);

let error = false;

const nameRegex = /^[a-zA-Z0-9\s]{2,}$/;

const emailRegex = /^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
const phoneRegex = /^\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})$/;

const handleInputChange = ({ target: { value, name } }) => {
  errorMessagesEl.forEach((m) => {
    if (value.trim() === "" && m.id === name)
      if (m.id === name) {
        m.classList.add("open");
        error = !error;
      } else if (name === "name") {
        return value.match(nameRegex)
          ? m.classList.remove("open")
          : m.classList.add("open");
      } else if (name === "phone") {
        return value.match(phoneRegex)
          ? m.classList.remove("open")
          : m.classList.add("open");
      } else if (name === "mail") {
        return value.match(emailRegex)
          ? m.classList.remove("open")
          : m.classList.add("open");
      } else m.classList.remove("open");
  });
};
inputsEl.forEach((i) => i.addEventListener("input", handleInputChange));
inputsEl.forEach((i) => i.addEventListener("blur", handleInputChange));

const handleFormSubmit = (e) => {
  e.preventDefault();
  if (error) errorFormMessage.style.display = "block";
};

orderFormEl.addEventListener("submit", handleFormSubmit);
