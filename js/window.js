import './effects.js';
import {  getPristine  } from './formvalidator.js';

const body = document.querySelector('body');
const imgForm = document.querySelector('.img-upload__form');
const imgUploadInput = imgForm.querySelector('.img-upload__input');
const imgUploadOverlay = imgForm.querySelector('.img-upload__overlay');
const uploadCancelButton = imgForm.querySelector('.img-upload__cancel');
const scaleControlValue = imgForm.querySelector('.scale__control--value');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorWindow = errorTemplate.cloneNode(true);
const errorWindowInner = errorWindow.querySelector('.success__inner');
const errorWindowTitle = errorWindow.querySelector('h2');
const errorButton = errorWindow.querySelector('.error__button');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successWindow = successTemplate.cloneNode(true);
const successWindowInner = successWindow.querySelector('.success__inner');
const successWindowTitle = successWindow.querySelector('h2');
const successButton = successWindow.querySelector('.success__button');

errorWindow.addEventListener('click', (evt) => {
  if (evt.target !== errorWindowInner && evt.target !== errorWindowTitle) {
    errorWindow.classList.add('hidden');
  }
});

errorWindow.classList.add('hidden');
body.appendChild(errorWindow);

errorButton.addEventListener('click', () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  errorWindow.classList.add('hidden');
});

successWindow.classList.add('hidden');
body.appendChild(successWindow);

successButton.addEventListener('click', () => {
  successWindow.classList.add('hidden');
});

successWindow.addEventListener('click', (evt) => {
  if (evt.target !== successWindowInner && evt.target !== successWindowTitle) {
    successWindow.classList.add('hidden');
  }
});

const closeWindow = () => {
  const imgUploadPreview = imgForm.querySelector('.img-upload__preview');
  imgUploadPreview.style.scale = '1';
  imgUploadPreview.classList.value = 'img-upload__preview effects__preview--none';
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  imgUploadInput.value = '';
  scaleControlValue.value = '100%';
  imgForm.querySelector('.text__description').value = '';
  imgForm.querySelector('.text__hashtags').value = '';
};
const closeHandler = () => {
  closeWindow();
};


imgUploadInput.addEventListener('change', () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
});


uploadCancelButton.addEventListener('click', closeHandler);
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closeHandler();
    errorWindow.classList.add('hidden');
    successWindow.classList.add('hidden');
  }
});

const pristine = getPristine();
const submitter = (form) => {
  const isValid = pristine.validate();
  if (isValid) {
    imgUploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
    imgUploadInput.disabled = true;
    fetch(
      'https://27.javascript.pages.academy/kekstagram-simple',
      {
        method: 'POST',
        body: form,
      })
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw new Error(`${response.status} — ${response.statusText}`);
      })
      .then(() => {
        closeHandler();
        successWindow.classList.remove('hidden');
        imgUploadInput.disabled = false;
      })
      .catch(() => {
        errorWindow.classList.remove('hidden');
        imgUploadInput.disabled = false;
      });
  }
};
const submitHandler = (to) => {
  submitter(to);
};
imgForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const from = new FormData(evt.target);
  submitHandler(from);
});
