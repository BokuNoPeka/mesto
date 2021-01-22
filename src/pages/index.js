import "./index.css";
import Card from "../scripts/Card.js";
import FormValidator from "../scripts/FormValidator.js";
import Section from "../scripts/Section.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import UserInfo from "../scripts/UserInfo.js";
import {
  templateSelector,
  openAddFormButton,
  nameInput,
  openEditFormButton,
  statusInput,
  cardsContainer,
  formEditSelector,
  formAddSelector,
  validationSettings,
  initialCards,
} from "../utiles/constants.js";

const profileInfo = new UserInfo({
  name: ".profile__name",
  status: ".profile__status",
});

const showEditPopup = new PopupWithForm(
  {
    formSelector: formEditSelector,
    popupSelector: ".popup_edit",
  },
  (data => {
    profileInfo.setUserInfo(data);
  })
);

openEditFormButton.addEventListener("click", () => {
  formEditValidator.resetErrors();
  nameInput.value = profileInfo.getUserInfo().name;
  statusInput.value = profileInfo.getUserInfo().status;
  showEditPopup.openPopup();
});

showEditPopup.setEventListeners();

const newPopupAdd = new PopupWithForm(
  { formSelector: formAddSelector, popupSelector: ".popup_add" },
  (inputData) => {
    const newCard = new Card(
      inputData["mesto-input"],
      inputData["url-input"],
      templateSelector,
      handleCardClick
    );
    addItems(newCard.generateCard(), true);
    newPopupAdd.closePopup();
  }
);

newPopupAdd.setEventListeners();
openAddFormButton.addEventListener("click", () => {
  formAddValidator.disableSubmitButton();
  formAddValidator.resetErrors();
  newPopupAdd.openPopup();
});

const imagePopup = new PopupWithImage({
  popupSelector: ".popup_full-size",
  imageSelector: ".popup__image",
  imageFigurecaption: ".popup__figurecaption",
});
imagePopup.setEventListeners();
const handleCardClick = (name, link) => {
  imagePopup.openPopup(name, link);
};

const getCards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const newCard = new Card(
        item.name,
        item.link,
        templateSelector,
        handleCardClick
      );
      addItems(newCard.generateCard(), false);
    },
  },
  cardsContainer
);

function addItems(element, position){
  getCards.addItem(element, position)
}

getCards.renderItems();


const formEditValidator = new FormValidator(
  validationSettings,
  formEditSelector
);
const formAddValidator = new FormValidator(validationSettings, formAddSelector);

formEditValidator.enableValidation();
formAddValidator.enableValidation();


