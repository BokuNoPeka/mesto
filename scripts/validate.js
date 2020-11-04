function showError(elementsForValidation, formElement, input) {
  const errorElement = formElement.querySelector(`#${input.id}-error`);
  input.classList.add(elementsForValidation.inputErrorClass);
  errorElement.textContent = input.validationMessage;
}
function hideError(elementsForValidation, formElement, input) {
  const errorElement = formElement.querySelector(`#${input.id}-error`);
  input.classList.remove(elementsForValidation.inputErrorClass);
  errorElement.textContent = "";
}

function checkInputValidity(elementsForValidation, formElement, input) {
  if (input.checkValidity()) {
    hideError(elementsForValidation, formElement, input);
  } else {
    showError(elementsForValidation, formElement, input);
  }
}

function toggleButtonState(elementsForValidation, formElement, buttonElement) {
  if (formElement.checkValidity()) {
    buttonElement.classList.remove(elementsForValidation.inactiveButtonClass);
    buttonElement.disabled = false;
  } else {
    buttonElement.classList.add(elementsForValidation.inactiveButtonClass);
    buttonElement.disabled = true;
  }
}

function setEventListeners(elementsForValidation, formElement) {
  const inputElements = Array.from(
    formElement.querySelectorAll(elementsForValidation.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    elementsForValidation.submitButtonSelector
  );
  inputElements.forEach((input) => {
    input.addEventListener("input", (evt) => {
      checkInputValidity(elementsForValidation, formElement, evt.target);
      toggleButtonState(elementsForValidation, formElement, buttonElement);
    });
  });
  toggleButtonState(elementsForValidation, formElement, buttonElement);
}

function enableValidation(enableValidationElements) {
  const formElements = Array.from(
    document.querySelectorAll(enableValidationElements.formSelector)
  );
  formElements.forEach((form) => {
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(enableValidationElements, form);
  });
}

const enableValidationElements = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button-invalid",
  inputErrorClass: "popup__input_state_invalid",
  errorClass: "error",
};
enableValidation(enableValidationElements);
