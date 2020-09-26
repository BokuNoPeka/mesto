const popup = document.querySelector('.popup')
const popupEdit = document.querySelector('.popup_edit')
const popupOpenEditButton = document.querySelector('.profile__edit-button')
const popupCloseEditButton = popupEdit.querySelector('.popup__button-close')
const popupSaveEditButton = popupEdit.querySelector('.popup__button-save')
const formElementEdit = popupEdit.querySelector('.popup__form_edit');
const nameProfile = document.querySelector('.profile__name');
const statusProfile = document.querySelector('.profile__status');
const nameInput = document.getElementsByName('name-input')[0];
const statusInput = document.getElementsByName('status-input')[0];

function openPopupEdit() {
    nameInput.value = nameProfile.textContent;
    statusInput.value = statusProfile.textContent;
    openPopup(popupEdit)
}

function savePopupEdit() {
    event.preventDefault();
    nameProfile.textContent = nameInput.value;
    statusProfile.textContent = statusInput.value;
    closePopup(popupEdit);
}


popupOpenEditButton.addEventListener('click', openPopupEdit);
formElementEdit.addEventListener('submit', savePopupEdit);
popupCloseEditButton.addEventListener('click', closePopup);

function openPopup() {
    popup.classList.add('popup_is-opened');
}

function closePopup() {
    popup.classList.remove('popup_is-opened');
}