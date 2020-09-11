const popup = document.querySelector('.popup')
const popupOpenEditButton = document.querySelector('.profile__edit-button')
const popupCloseEditButton = document.querySelector('.popup__button-close')
const popupSaveEditButton = document.querySelector('.popup__button-save')
const formElementEdit = document.querySelector('.popup__form');
const nameProfile = document.querySelector('.profile__name');
const statusProfile = document.querySelector('.profile__status');
const nameInput = document.getElementsByName('name-input')[0];
const statusInput = document.getElementsByName('status-input')[0];

function openPopupEdit() {
    nameInput.value = nameProfile.textContent;
    statusInput.value = statusProfile.textContent;
    popup.classList.add('popup_is-opened');
}

function savePopupEdit(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    statusProfile.textContent = statusInput.value;
    closePopupEdit(evt);
}

function closePopupEdit(evt) {
    popup.classList.remove('popup_is-opened');
}

popupOpenEditButton.addEventListener('click', openPopupEdit);
formElementEdit.addEventListener('submit', savePopupEdit);
popupCloseEditButton.addEventListener('click', closePopupEdit);