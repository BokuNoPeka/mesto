import Popup from "./Popup.js";
export default class PopupwithForm extends Popup {
  constructor({ formSelector, popupSelector }, handleFormSubmit) {
    super(popupSelector);
    this._form = document.querySelector(formSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  closePopup() {
    super.closePopup();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", () => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.closePopup();
    });
  }

  _getInputValues() {
    this._inputList = this._form.querySelectorAll(".popup__input");
    this._inputValues = {};
    this._inputList.forEach((item) => {
      this._inputValues[item.name] = item.value;
    });
    return this._inputValues;
  }
}
