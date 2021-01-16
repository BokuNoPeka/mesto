export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
  }
  openPopup() {
    this._popup.classList.add("popup_is-opened");
    document.addEventListener("keydown", _handleEscClose());
  }

  closePopup() {
    this._popup.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", _handleEscClose());
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.closePopup();
    }
  }

  setEventListener() {

    this._popup.querySelector(".popup__button-close").addEventListener("click", () => {
      this.closePopup();
    });
  }
}