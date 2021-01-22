export default   class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = document.querySelector(form);
    this._submitButton = this._form.querySelector('.popup__button-add');
    this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
  }
  _showError(input) {
    const errorElement = this._form.querySelector(`#${input.id}-error`);
    input.classList.add(this._settings.inputErrorClass);
    errorElement.textContent = input.validationMessage;
  }
  _hideError(input) {
    const errorElement = this._form.querySelector(`#${input.id}-error`);
    input.classList.remove(this._settings.inputErrorClass);
    errorElement.textContent = "";
  }
  _checkInputValidity(input) {
    if (input.checkValidity()) {
      this._hideError(input);
    } else {
      this._showError(input);
    }
  }
  _toggleButtonState(buttonElement) {
    if (this._form.checkValidity()) {
      buttonElement.classList.remove(this._settings.inactiveButtonClass);
      buttonElement.disabled = false;
    } else {
      buttonElement.classList.add(this._settings.inactiveButtonClass);
      buttonElement.disabled = true;
    }
  }
  

  _setEventListeners() {
    const inputElements = Array.from(
      this._form.querySelectorAll(this._settings.inputSelector)
    );
    const buttonElement = this._form.querySelector(
      this._settings.submitButtonSelector
    );
    inputElements.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState(buttonElement);
      });
    });
    this._toggleButtonState(buttonElement);
  }

  disableSubmitButton() {
    this._submitButton.setAttribute('disabled', true);
    this._submitButton.classList.add('popup__button-invalid'); 
}

resetErrors() {
    this._inputList.forEach((inputElement) => {
       this._hideError(inputElement);
    });
}

  enableValidation() {
    this._setEventListeners(this._settings, this._form);
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  }
}

