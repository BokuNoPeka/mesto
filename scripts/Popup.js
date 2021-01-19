export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);  
  }
  openPopup() {
    this._popup.classList.add("popup_is-opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  closePopup() {
    this._popup.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.closePopup();
    }
  }

  setEventListeners() {

    this._popup.querySelector(".popup__button-close").addEventListener("click", () => {
      this.closePopup();
    });
    console.log(this._popup)
  }
}