import '/nouislider/nouislider.js';

const form = document.querySelector('.img-upload__form');
const scaleButtonSmaller = form.querySelector('.scale__control--smaller');
const scaleButtonBigger = form.querySelector('.scale__control--bigger');
const scaleControlValue = form.querySelector('.scale__control--value');
const imgUploadPreview = form.querySelector('.img-upload__preview');
const effectLevel = form.querySelector('.effect-level__value');
const slider = document.querySelector('.effect-level__slider');

noUiSlider.create(slider, {
  start: [80],
  range: {
    min: [0],
    max: [100],
  },
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

document.querySelector('.img-upload__effect-level').classList.add('hidden');

scaleButtonSmaller.addEventListener('click', () => {
  let percent = parseInt(scaleControlValue.value, 10);
  if (percent - 25 < 25) {
    percent = '25%';
  } else {
    percent = `${  percent - 25  }%`;
  }
  imgUploadPreview.style.scale = parseInt(percent, 10) / 100;
  scaleControlValue.value = percent;
});

scaleButtonBigger.addEventListener('click', () => {
  let percent = parseInt(scaleControlValue.value, 10);
  if (percent + 25 > 100) {
    percent = '100%';
  } else {
    percent = `${  percent + 25  }%`;
  }
  imgUploadPreview.style.scale = parseInt(percent, 10) / 100;
  scaleControlValue.value = percent;
});

const styles = form.querySelectorAll( '.effects__item');
for (let i = 0; i < styles.length; i++){
  styles[i].addEventListener('click', () => {
    imgUploadPreview.classList.value = `img-upload__preview ${  styles[i].querySelector('.effects__preview').classList[1]}`;
  });
}

slider.noUiSlider.on('update', () => {
  effectLevel.value = slider.noUiSlider.get();
});
