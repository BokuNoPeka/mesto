const editForm = document.querySelector('.popup_edit');
const openEditFormButton = document.querySelector('.profile__edit-button');
const closeEditFormButton = editForm.querySelector('.popup__button-close');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const nameInput = editForm.querySelector('.popup__input_edit_name');
const statusInput = editForm.querySelector('.popup__input_edit_status');
const cardsContainer = document.querySelector('.gallery__cards');
const addForm = document.querySelector('.popup_add');
const openAddFormButton = document.querySelector('.profile__add-button');
const closeAddFormButton = addForm.querySelector('.popup__button-close_add');
const galleryElement = document.querySelector('.template-gallery').content;
const mestoInput = addForm.querySelector('.popup__input_add_name');
const urlInput = addForm.querySelector('.popup__input_add_source');
const fullSizeImage = document.querySelector('.popup_full-size');
const imageName = fullSizeImage.querySelector('.popup__figurecaption');
const imageSource = fullSizeImage.querySelector('.popup__image');
const closeFullSizeButton = fullSizeImage.querySelector('.popup__button-close_full-size');

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

openEditFormButton.addEventListener('click', () => {
    openEditForm(editForm);
});

editForm.addEventListener('submit', (event) => {
    event.preventDefault();
    saveEditForm();
});

closeEditFormButton.addEventListener('click', () => {
    closePopup(editForm);
});


/*=================PopupAdd=====================*/
function openAddForm() {
    mestoInput.value = '';
    urlInput.value = '';

    openPopup(addForm);

}

function submitAddForm(name, link) {
    const card = createCard(name, link);
    cardsContainer.prepend(card);
    closePopup(addForm);
}

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
    closePopup(addForm);
});

openAddFormButton.addEventListener('click', () => {
    openAddForm();
});

addForm.addEventListener('submit', (event) => {
    event.preventDefault();
    submitAddForm(mestoInput.value, urlInput.value);
});

function renderCards() {
    initialCards.forEach(item => {
        submitAddForm(item.name, item.link);
    })

}
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