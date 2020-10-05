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