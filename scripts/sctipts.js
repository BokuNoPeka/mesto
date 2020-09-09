const popup = document.querySelector('.popup')
const popupOpenEditButton = document.querySelector('.profile__edit-button')
const popupCloseEditButton = document.querySelector('.popup__button-close')
const popupSaveEditButton = document.querySelector('.popup__button-save')
const formElementEdit = document.querySelector('.popup__form');
const nameProfile = document.querySelector('.profile__name');
const statusProfile = document.querySelector('.profile__status');
const nameInput = document.querySelector('.js-popup__name');
const statusInput = document.querySelector('.js-popup__status');

function openPopupEdit() {
    nameInput.value = nameProfile.textContent;
    statusInput.value = statusProfile.textContent;
    popup.classList.add('popup_is-opened');
}

function savePopupEdit(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    statusProfile.textContent = statusInput.value;
    popup.classList.remove('popup_is-opened');
}

function closePopupEdit(evt) {
    evt.preventDefault();
    popup.classList.remove('popup_is-opened');
}

popupOpenEditButton.addEventListener('click', openPopupEdit);
popupSaveEditButton.addEventListener('click', savePopupEdit);
popupCloseEditButton.addEventListener('click', closePopupEdit);