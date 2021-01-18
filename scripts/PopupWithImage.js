import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(){
    this._image = this._popup.querySelector('popup__image');
  };

  openPopup(){
    super.open();  
    this._image.src = link;
    this._image.alt = name;
    this._image.querySelector('popup__figurecaption').textContent = name;  
  }
}
