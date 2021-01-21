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
  initialCards
} from "../utiles/constants.js";


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

