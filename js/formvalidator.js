import '/pristine/Pristine.min.js';
const form = document.querySelector('.img-upload__form');
const hashTag = new RegExp('^#[а-яa-zA-ZА-ЯёЁ0-9]{1,19}$');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

const validateHashTag = function (value) {
  return value === '' || hashTag.test(value);
};

const validateComment = function (value) {
  return value.length > 19 && value.length <= 140;
};

pristine.addValidator(form.querySelector('.text__hashtags'), validateHashTag,
  'ХэшТег должен начинаться с # и содержать только цифры и буквы латинского и русского алфавитов'
);

pristine.addValidator(form.querySelector('.text__description'), validateComment,
  'Комментарий обязателен и должен быть длиной от 20 до 140 символов'
);

form.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
