const refs = {
  openMenuBTN: document.getElementById("menu-open-btn"),
  closeMenuBTN: document.getElementById("mob-menu-close-btn"),

  orderFormEl: document.getElementById("order-form"),
  inputsEl: document.querySelectorAll("#order-form-input"),
  errorMessagesEl: document.querySelectorAll(".order-form__error-message"),
  errorFormMessage: document.querySelector(".error__message-pop-up"),
  backdrop: document.getElementById("backdrop"),
  submitBtn: document.getElementById("order-submit-btn"),

  orderBtn: document.querySelectorAll("#order-btn"),
  backdrop: document.getElementById("backdrop"),
  closeModalBtn: document.getElementById("close-modal"),
  subscriveFormEl: document.querySelectorAll("#subscribe-form"),

  sliderLine: document.querySelector(".slider-line"),
};

export default refs;
