const templateSelector = document.querySelector(".template-gallery").content;
const editForm = document.querySelector(".popup_edit");
const openEditFormButton = document.querySelector(".profile__edit-button");
const nameInput = editForm.querySelector(".popup__input_edit_name");
const statusInput = editForm.querySelector(".popup__input_edit_status");
const cardsContainer = document.querySelector(".gallery__cards");
const openAddFormButton = document.querySelector(".profile__add-button");
const formEditSelector = ".popup__form_edit";
const formAddSelector = ".popup__form_add";
const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button-invalid",
  inputErrorClass: "popup__input_state_invalid",
  errorClass: "error",
};
const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export {
  templateSelector,
  openAddFormButton,
  nameInput,
  openEditFormButton,
  statusInput,
  cardsContainer,
  formEditSelector,
  formAddSelector,
  validationSettings,
  initialCards
};
