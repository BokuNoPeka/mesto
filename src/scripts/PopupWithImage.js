import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector){
    super(popupSelector);
  };

  openPopup(name, link){
    super.openPopup();
    this._image = this._popup.querySelector(".popup__image");  
    this._image.src = link;
    this._image.alt = name;
    this._popup.querySelector('.popup__figurecaption').textContent = name;  
  }
}
