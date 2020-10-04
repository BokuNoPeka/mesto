const popup = document.querySelector('.popup');
const EditForm = document.querySelector('.popup_edit');
const openEditFormButton = document.querySelector('.profile__edit-button');
const closeEditFormButton = EditForm.querySelector('.popup__button-close');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const nameInput = document.getElementsByName('name-input')[0];
const statusInput = document.getElementsByName('status-input')[0];
const cardsContainer = document.querySelector('.gallery__cards');
const AddForm = document.querySelector('.popup_add');
const openAddFormButton = document.querySelector('.profile__add-button');
const closeAddFormButton = AddForm.querySelector('.popup__button-close_add');
const galleryElement = document.querySelector('.template-gallery').content;
const mestoInput = document.getElementsByName('mesto-input')[0];
const urlInput = document.getElementsByName('url-input')[0];
const fullSizeImage = document.querySelector('.popup_full-size');
const imageName = fullSizeImage.querySelector('.popup__figurecaption');
const imageSource = fullSizeImage.querySelector('.popup__image');
const closeFullSizeButton = fullSizeImage.querySelector('.popup__button-close_full-size');

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
function openEditForm() {
    nameInput.value = profileName.textContent;
    statusInput.value = profileStatus.textContent;
    openPopup(EditForm);
}

function saveEditForm() {
    profileName.textContent = nameInput.value;
    profileStatus.textContent = statusInput.value;
    closePopup(EditForm);
}

openEditFormButton.addEventListener('click', () => {
    openEditForm(EditForm);
});

EditForm.addEventListener('submit', (event) => {
    event.preventDefault();
    saveEditForm();
});

closeEditFormButton.addEventListener('click', () => {
    closePopup(EditForm);
});


/*=================PopupAdd=====================*/
function openAddForm() {
    mestoInput.value = '';
    urlInput.value = '';

    openPopup(AddForm);

};

function submitAddForm(name, link) {
    const card = createCard(name, link);
    cardsContainer.prepend(card);
    closePopup(AddForm);
};

function createCard(name, link) {
    const container = galleryElement.cloneNode(true);
    const image = container.querySelector('.gallery__image');
    const title = container.querySelector('.gallery__card-name');
    const like = container.querySelector('.gallery__like-button');
    const trashCan = container.querySelector('.gallery__trash-can-button');
    const element = container.querySelector('.gallery__card');

    like.addEventListener('click', () => {
        likeToggle(like);
    });

    trashCan.addEventListener('click', () => {
        element.remove();
    });

    image.addEventListener('click', () => {
        showFullSize(name, link);
    });


    title.textContent = name;
    image.src = link;
    image.alt = name;

    return container;
};

const likeToggle = function(element) {
    element.classList.toggle('gallery__like-button_active');
}


closeAddFormButton.addEventListener('click', () => {
    closePopup(AddForm);
});

openAddFormButton.addEventListener('click', () => {
    openAddForm();
});

AddForm.addEventListener('submit', (event) => {
    event.preventDefault();
    submitAddForm(mestoInput.value, urlInput.value);
});

function renderCards() {
    initialCards.forEach(item => {
        submitAddForm(item.name, item.link);
    })

};
renderCards();
/*=================FullSize=====================*/
function showFullSize(name, link) {
    openPopup(fullSizeImage);
    imageName.textContent = name;
    imageSource.src = link;
    imageSource.alt = name;
}
closeFullSizeButton.addEventListener('click', () => {
    closePopup(fullSizeImage);
});


/*==============================CommonFunctions===========================*/
function openPopup(popup) {
    popup.classList.add('popup_is-opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
}