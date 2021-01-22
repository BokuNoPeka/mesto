
export default class Card {
  constructor(name, link, template, handleCardClick) {
    this._name = name;
    this._link = link;
    this._template = template;
    this._content = this._template.querySelector(".card").cloneNode(true);
    this._handleCardClick = handleCardClick;
  }

  _likeToggle = () => {
    this._content
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  };

  _deleteCard = () => {
    this._content.remove();
    this._content = null;
  };

  _setEventListeners() {
    this._content
      .querySelector(".card__like-button")
      .addEventListener("click", () => this._likeToggle());
    this._content
      .querySelector(".card__trash-can-button")
      .addEventListener("click", () => this._deleteCard());
    this._image.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  generateCard() {
    this._image = this._content.querySelector(".card__image");
    this._image.src = this._link;
    this._image.alt = this._name;
    this._content.querySelector(".card__card-name").textContent = this._name;

    this._setEventListeners();
    return this._content;
  }
}
