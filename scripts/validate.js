function setCustomErrorMessages(input) {
  if (input.validity.patternMismatch) {
      input.setCustomValidity(errorMessages.patternMismatch);
  }
}
function showError(input) {
  const errorElement = document.querySelector(`#${input.id}-error`);
  input.classList.add("popup__input_state_invalid");
  setCustomErrorMessages(input);
  errorElement.textContent = input.validationMessage;
}
function hideError(input) {
  const errorElement = document.querySelector(`#${input.id}-error`);
  input.classList.add("popup__input_state_invalid");
  setCustomErrorMessages(input);
  errorElement.textContent = '';
}

function checkInputValidity(input) {
  if (input.checkInputValidity) {
    hideError(input);
  } else {
    showError(input);
  }
}

function setEventListeners() {
  const inputElements = Array.from(
    Array.from(document.querySelectorAll(".popup__input"))
  );
  inputElements.forEach((input) => {
    input.addEventListener("input", (evt) => {
      checkInputValidity(evt.target);
    });
  });
}
setEventListeners();
