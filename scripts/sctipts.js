const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_edit');
const popupOpenEditButton = document.querySelector('.profile__edit-button');
const popupCloseEditButton = popupEdit.querySelector('.popup__button-close');
const formElementEdit = popupEdit.querySelector('.popup__form_edit');
const nameProfile = document.querySelector('.profile__name');
const statusProfile = document.querySelector('.profile__status');
const nameInput = document.getElementsByName('name-input')[0];
const statusInput = document.getElementsByName('status-input')[0];
const cardsContainer = document.querySelector('.gallery__cards');

/*=================PopupEdit=====================*/
function openPopupEdit() {
    nameInput.value = nameProfile.textContent;
    statusInput.value = statusProfile.textContent;
    openPopup(popupEdit)
}

function savePopupEdit() {
    nameProfile.textContent = nameInput.value;
    statusProfile.textContent = statusInput.value;
    closePopup(popupEdit);
}

popupOpenEditButton.addEventListener('click', () => {
    openPopupEdit(popupEdit)
});

popupEdit.addEventListener('submit', (event) => {
    event.preventDefault();
    savePopupEdit()
});

popupCloseEditButton.addEventListener('click', () => {
    closePopup(popupEdit)
});


/*=================PopupAdd=====================*/
const popupAdd = document.querySelector('.popup_add');
const popupOpenAddButton = document.querySelector('.profile__add-button');
const popupCloseAddButton = popupAdd.querySelector('.popup__button-close');
const galleryElement = document.querySelector('.template-gallery').content;
const mestoInput = document.getElementsByName('mesto-input')[0];
const urlInput = document.getElementsByName('url-input')[0];


function openPopupAdd() {
    mestoInput.value = '';
    urlInput.value = '';

    openPopup(popupAdd);

};

function savePopupAdd(name, link) {
    const card = createCard(name, link);
    cardsContainer.prepend(card);
    closePopup(popupAdd);
};

function createCard(name, link) {
    const container = galleryElement.cloneNode(true);
    const image = galleryElement.querySelector('.gallery__image');
    const title = galleryElement.querySelector('.gallery__card-name');

    title.textContent = name;
    image.src = link;
    image.alt = name;

    return container;
};



popupCloseAddButton.addEventListener('click', () => {
    closePopup(popupAdd);
});

popupOpenAddButton.addEventListener('click', () => {
    openPopupAdd();
});

popupAdd.addEventListener('submit', (event) => {
    event.preventDefault();
    savePopupAdd(mestoInput.value, urlInput.value);
});

/*==============================CommonFunctions===========================*/
function openPopup(popup) {
    popup.classList.add('popup_is-opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
}