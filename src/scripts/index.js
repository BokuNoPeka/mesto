import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import Popup from "./Popup.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";

const templateSelector = document.querySelector(".template-gallery").content;
const popups = Array.from(document.querySelectorAll(".popup"));
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

const profileInfo = new UserInfo({
  name: '.profile__name',
  status: '.profile__status',
});

const showEditPopup = new PopupWithForm({
  formSelector: formEditSelector,
  popupSelector: '.popup_edit',
},(data) => {
  profileInfo.setUserInfo(data);
});

openEditFormButton.addEventListener('click', ()=>{
  nameInput.value = profileInfo.getUserInfo().name;
  statusInput.value = profileInfo.getUserInfo().status;
  showEditPopup.openPopup();
});

showEditPopup.setEventListeners();



const newPopupAdd = new PopupWithForm(
  { formSelector: formAddSelector, popupSelector: ".popup_add" },
  (inputData) => {
    const newcard = new Card(
      inputData["mesto-input"],
      inputData["url-input"],
      templateSelector
    );
    cardsContainer.prepend(newcard.generateCard());
    newPopupAdd.closePopup();
  }
);

newPopupAdd.setEventListeners();
openAddFormButton.addEventListener("click", () => {
  newPopupAdd.openPopup();
});

const imagePopup = new PopupWithImage('.popup_full-size');
imagePopup.setEventListeners();
const handleCardClick = (name, link)=>{
  imagePopup.openPopup(name, link);
};

const getCards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const newCard = new Card(item.name, item.link, templateSelector, handleCardClick);
      const element = newCard.generateCard();

      getCards.addItem(element, false);
    },
  },
  cardsContainer
);

getCards.renderItems();



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
const formAddValidator = new FormValidator(
  validationSettings,
  formAddSelector);

formEditValidator.enableValidation();
formAddValidator.enableValidation();
