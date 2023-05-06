const form = document.querySelector('.img-upload__form');
const uploadInput = form.querySelector('.img-upload__input');
const uploadOverlay = form.querySelector('.img-upload__overlay');
const uploadCancelButton = form.querySelector('.img-upload__cancel');
const scaleButtonSmaller = form.querySelector('.scale__control--smaller');
const scaleButtonBigger = form.querySelector('.scale__control--bigger');
const scaleControlValue = form.querySelector('.scale__control--value');

uploadInput.addEventListener('change', () => {
  uploadOverlay.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  const imgUploadPreview = form.querySelector('.img-upload__preview');
  imgUploadPreview.style.scale = '1';
  imgUploadPreview.classList.value = 'img-upload__preview effects__preview--none';
  scaleControlValue.value = '100%';
  form.querySelector('.text__description').value = '';
});

document.addEventListener('keydown', (evt) => {
  const imgUploadPreview = form.querySelector('.img-upload__preview');
  if (evt.key === 'Escape') {
    uploadOverlay.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    uploadInput.value = '';
    imgUploadPreview.style.scale = '1';
    imgUploadPreview.classList.value = 'img-upload__preview effects__preview--none';
    scaleControlValue.value = '100%';
    form.querySelector('.text__description').value = '';
  }
});

uploadCancelButton.addEventListener('click', () => {
  const imgUploadPreview = form.querySelector('.img-upload__preview');
  uploadOverlay.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  uploadInput.value = '';
  imgUploadPreview.style.scale = '1';
  imgUploadPreview.classList.value = 'img-upload__preview effects__preview--none';
  scaleControlValue.value = '100%';
  form.querySelector('.text__description').value = '';
});

form.addEventListener('submit', () => {
  const imgUploadPreview = form.querySelector('.img-upload__preview');
  uploadOverlay.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  uploadInput.value = '';
  imgUploadPreview.style.scale = '1';
  imgUploadPreview.classList.value = 'img-upload__preview effects__preview--none';
  scaleControlValue.value = '100%';
  form.querySelector('.text__description').value = '';
});

for (let i = 0; i < form.querySelectorAll( '.effects__item').length; i++){
  const imgUploadPreview = form.querySelector('.img-upload__preview');
  form.querySelectorAll( '.effects__item')[i].addEventListener('click', () => {
    imgUploadPreview.classList.value = `img-upload__preview ${  form.querySelectorAll( '.effects__item')[i].querySelector('.effects__preview').classList[1]}`;
  });
}

scaleButtonSmaller.addEventListener('click', () => {
  const imgUploadPreview = form.querySelector('.img-upload__preview');
  let percent = parseInt(scaleControlValue.value, 10);
  if (percent + 25 > 25) {
    percent = '100%';
  } else {
    percent = `${  percent + 25  }%`;
  }
  imgUploadPreview.style.scale = parseInt(percent, 10) / 100;
  scaleControlValue.value = percent;
});

scaleButtonBigger.addEventListener('click', () => {
  const imgUploadPreview = form.querySelector('.img-upload__preview');
  let percent = parseInt(scaleControlValue.value, 10);
  if (percent - 25 < 100) {
    percent = '25%';
  } else {
    percent = `${  percent - 25  }%`;
  }
  imgUploadPreview.style.scale = parseInt(percent, 10) / 100;
  scaleControlValue.value = percent;
});
