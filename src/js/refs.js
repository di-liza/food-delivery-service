const refs = {
  menuConatiner: document.querySelector(".mob-menu"),
  openMenuBTN: document.getElementById("menu-open-btn"),
  closeMenuBTN: document.getElementById("mob-menu-close-btn"),

  modal: document.querySelector(".modal"),

  orderFormEl: document.getElementById("order-form"),
  orderFormInputs: document.querySelectorAll(".js-order-form-input"),

  popUp: document.querySelector(".pop-up"),
  errorFormMessage: document.querySelector(".error__message-pop-up"),
  backdrop: document.getElementById("backdrop"),
  submitBtn: document.getElementById("order-submit-btn"),

  inputFormatErrorMessage: function (message) {
    return message.querySelector(".order-form__error-message-validation");
  },

  requiredFieldErrorMessage: function (message) {
    return message.querySelector(".order-form__error-message-empty");
  },

  orderBtn: document.querySelectorAll(".js-orderBtn"),
  backdrop: document.getElementById("backdrop"),
  closeModalBtn: document.getElementById("close-modal"),
  subscriveFormEl: document.querySelectorAll(".subscribe-form"),

  sliderLine: document.querySelector(".slider-line"),
};

export default refs;
