export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closeOverlay = this._closeOverlay.bind(this); 
  }
  openPopup() {
    this._popup.classList.add("popup_is-opened");
    document.addEventListener("keydown", this._handleEscClose);
    this._popup.addEventListener('click', this._closeOverlay);
  }

  closePopup() {
    this._popup.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", this._handleEscClose);
    this._popup.removeEventListener('click', this._closeOverlay);
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.closePopup();
    }
  }

  _closeOverlay(event){
    if(event.target === event.currentTarget){
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
