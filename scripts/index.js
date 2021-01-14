import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";

const templateSelector = document.querySelector(".template-gallery").content;
const popups = Array.from(document.querySelectorAll(".popup"));
const editForm = document.querySelector(".popup_edit");
const openEditFormButton = document.querySelector(".profile__edit-button");
const closeEditFormButton = editForm.querySelector(".popup__button-close");
const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");
const nameInput = editForm.querySelector(".popup__input_edit_name");
const statusInput = editForm.querySelector(".popup__input_edit_status");
const cardsContainer = ".gallery__cards";
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

/*=================PopupEdit=====================*/
function openEditForm() {
  nameInput.value = profileName.textContent;
  statusInput.value = profileStatus.textContent;
  openPopup(editForm);
}

function saveEditForm() {
  profileName.textContent = nameInput.value;
  profileStatus.textContent = statusInput.value;
  closePopup(editForm);
}

openEditFormButton.addEventListener("click", () => {
  openEditForm(editForm);
});

editForm.addEventListener("submit", () => {
  saveEditForm();
});

closeEditFormButton.addEventListener("click", () => {
  closePopup(editForm);
});

/*=================PopupAdd=====================*/

function openAddForm() {
  mestoInput.value = "";
  urlInput.value = "";

  openPopup(addForm);
}

closeAddFormButton.addEventListener("click", () => {
  closePopup(addForm);
});

openAddFormButton.addEventListener("click", () => {
  openAddForm();
});

addForm.addEventListener("submit", () => {
  prependCard(mestoInput.value, urlInput.value);
});

const getCards = new Section({ items: initialCards , renderer: (item)=>{
  const newCard = new Card({data: item}, templateSelector)
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
function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closePopupOnEscape);
}

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closePopupOnEscape);
}

function closePopupOnEscape(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_is-opened"));
  }
}

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
