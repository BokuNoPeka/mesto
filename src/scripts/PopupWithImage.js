import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({popupSelector, imageSelector, imageFigurecaption}){
    super(popupSelector);
    this._image = this._popup.querySelector(imageSelector);
    this._imageFigurecaption = this._popup.querySelector(imageFigurecaption);
  };

  openPopup(name, link){
    super.openPopup();
    this._image = this._popup.querySelector(".popup__image");  
    this._image.src = link;
    this._image.alt = name;
    this._imageFigurecaption.textContent = name;
  }
}
