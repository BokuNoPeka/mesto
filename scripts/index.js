import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import Popup from "./Popup.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";

const templateSelector = document.querySelector(".template-gallery").content;
const popups = Array.from(document.querySelectorAll(".popup"));
const editForm = document.querySelector(".popup_edit");
const openEditFormButton = document.querySelector(".profile__edit-button");
const closeEditFormButton = editForm.querySelector(".popup__button-close");
const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");
const nameInput = editForm.querySelector(".popup__input_edit_name");
const statusInput = editForm.querySelector(".popup__input_edit_status");
const cardsContainer = document.querySelector(".gallery__cards");
const addForm = document.querySelector(".popup_add");
const openAddFormButton = document.querySelector(".profile__add-button");
const closeAddFormButton = addForm.querySelector(".popup__button-close_add");
const mestoInput = addForm.querySelector(".popup__input_add_name");
const urlInput = addForm.querySelector(".popup__input_add_source");
const fullSizeImage = document.querySelector(".popup_full-size");
const imageName = fullSizeImage.querySelector(".popup__figurecaption");
const imageSource = fullSizeImage.querySelector(".popup__image");
const closeFullSizeButton = fullSizeImage.querySelector(
  ".popup__button-close_full-size"
);

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
const forms = document.querySelectorAll(validationSettings.formSelector);


const newPopup = new PopupWithForm({formSelector: formAddSelector,
  popupSelector: '.popup_add'}, (inputData)=>{
    const newcard = new Card(inputData['mesto-input'], inputData['url-input'], templateSelector);  
    cardsContainer.prepend(newcard.generateCard()); 
    newPopup.closePopup();
  });

  newPopup.setEventListeners();
  openAddFormButton.addEventListener('click', ()=>{
    newPopup.openPopup();
});



const getCards = new Section({ items: initialCards , renderer: (item)=>{
  const newCard = new Card(item.name, item.link, templateSelector)
  const element = newCard.generateCard();

  getCards.addItem(element, false);
} }, cardsContainer);

getCards.renderItems();


/*=================FullSize=====================*/

export function showFullSize(name, link) {
  imageName.textContent = name;
  imageSource.src = link;
  imageSource.alt = name;
  openPopup(fullSizeImage);
};

closeFullSizeButton.addEventListener("click", () => {
  closePopup(fullSizeImage);
});

/*==============================CommonFunctions===========================*/

const clickOnLayout = (evt) => {
  if (evt.target !== evt.currentTarget) {
    return;
  }
  closePopup(evt.currentTarget);
};

popups.forEach((form) => {
  form.addEventListener("click", clickOnLayout);
});
/*==============================Validation===========================*/
const formEditValidator = new FormValidator(
  validationSettings,
  formEditSelector
);
const formAddValidator = new FormValidator(validationSettings, formAddSelector);

formEditValidator.enableValidation();
formAddValidator.enableValidation();
