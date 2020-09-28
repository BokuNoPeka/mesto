const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_edit');
const popupOpenEditButton = document.querySelector('.profile__edit-button');
const popupCloseEditButton = popupEdit.querySelector('.popup__button-close');
const popupSaveEditButton = popupEdit.querySelector('.popup__button-save');
const formElementEdit = popupEdit.querySelector('.popup__form_edit');
const nameProfile = document.querySelector('.profile__name');
const statusProfile = document.querySelector('.profile__status');
const nameInput = document.getElementsByName('name-input')[0];
const statusInput = document.getElementsByName('status-input')[0];

const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

/*=================PopupEdit=====================*/
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
popupOpenEditButton.addEventListener('click', () => {
    openPopupEdit(popupEdit)
});
formElementEdit.addEventListener('submit', () => {
    savePopupEdit()
});
popupCloseEditButton.addEventListener('click', () => {
    closePopup(popupEdit)
});
/*=================PopupAdd=====================*/
const popupAdd = document.querySelector(".popup_add");
const popupOpenAddButton = document.querySelector('.profile__add-button');
const popupCloseAddButton = popupAdd.querySelector(".popup__button-close");
const mestoInput = document.getElementsByName('mesto-input')[0];
const urlInput = document.getElementsByName('url-input')[0];

function openPopupAdd() {
    mestoInput.value = '';
    urlInput.value = '';
    openPopup(popupAdd)
}


popupCloseAddButton.addEventListener('click', () => {
    closePopup(popupAdd)
});
popupOpenAddButton.addEventListener('click', () => {
    openPopupAdd()
});
/*==============================CommonFunctions===========================*/
function openPopup(popup) {
    popup.classList.add('popup_is-opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
}