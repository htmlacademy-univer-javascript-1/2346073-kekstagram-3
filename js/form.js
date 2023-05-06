const form = document.querySelector('.img-upload__form');
const uploadInput = form.querySelector('.img-upload__input');
const uploadOverlay = form.querySelector('.img-upload__overlay');
const uploadCancelButton = form.querySelector('.img-upload__cancel');

uploadInput.addEventListener('change', () => {
  uploadOverlay.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    uploadOverlay.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    uploadInput.value = '';
  }
});

uploadCancelButton.addEventListener('click', () => {
  uploadOverlay.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  uploadInput.value = '';
});
