export default   class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = document.querySelector(form);
  }
  _showError(settings, formElement, input) {
    const errorElement = formElement.querySelector(`#${input.id}-error`);
    input.classList.add(settings.inputErrorClass);
    errorElement.textContent = input.validationMessage;
  }
  _hideError(settings, formElement, input) {
    const errorElement = formElement.querySelector(`#${input.id}-error`);
    input.classList.remove(settings.inputErrorClass);
    errorElement.textContent = "";
  }
  _checkInputValidity(settings, formElement, input) {
    if (input.checkValidity()) {
      this._hideError(settings, formElement, input);
    } else {
      this._showError(settings, formElement, input);
    }
  }
  _toggleButtonState(settings, formElement, buttonElement) {
    if (formElement.checkValidity()) {
      buttonElement.classList.remove(settings.inactiveButtonClass);
      buttonElement.disabled = false;
    } else {
      buttonElement.classList.add(settings.inactiveButtonClass);
      buttonElement.disabled = true;
    }
  }

  _setEventListeners(settings, formElement) {
    const inputElements = Array.from(
      formElement.querySelectorAll(settings.inputSelector)
    );
    const buttonElement = formElement.querySelector(
      settings.submitButtonSelector
    );
    inputElements.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(settings, formElement, input);
        this._toggleButtonState(settings, formElement, buttonElement);
      });
    });
    this._toggleButtonState(settings, formElement, buttonElement);
  }

  enableValidation() {
    this._setEventListeners(this._settings, this._form);
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  }
}

