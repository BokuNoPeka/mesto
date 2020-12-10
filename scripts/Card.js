import { _showFullSize } from "./index.js";
export default class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
    this._template = document.querySelector(".template-gallery").content;
  }

  _likeToggle = () => {
    this._content
      .querySelector(".gallery__like-button")
      .classList.toggle("gallery__like-button_active");
  };

  _deleteCard = () => {
    this._content.remove();
    this._content = null;
  };

  _setEventListeners() {
    this._content
      .querySelector(".gallery__like-button")
      .addEventListener("click", () => this._likeToggle());
    this._content
      .querySelector(".gallery__trash-can-button")
      .addEventListener("click", () => this._deleteCard());
    this._content
      .querySelector(".gallery__image")
      .addEventListener("click", () => {
        _showFullSize(this._name, this._link);
      });
  }

  render() {
    this._content = this._template
      .querySelector(".gallery__card")
      .cloneNode(true);
    const _image = this._content.querySelector(".gallery__image");
    _image.setAttribute("alt", this._name);
    _image.setAttribute("src", this._link);
    this._content.querySelector(".gallery__card-name").textContent = this._name;

    this._setEventListeners();
    return this._content;
  }
}

