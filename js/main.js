const PHOTO_COUNT = 25;
const DESCRIPTION = [
  'На море',
  'В горах',
  'Ем',
  'Разогнали жигу до 200 км/ч',
  'Тотальный техосмотр',
  'Возвращаю осцилограф',
  'Опять везут в лес...',
  'Ха-ха-ха, не догонят! Хотя...',
  'Пора заканчивать так проводить выходные.'
];

function randomNumber (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

function strLength (str, max){
  str.length <= max;
}


const createPhoto = (i) =>{
  const photo = {
    id: i,
    url: `photos/${i}.jpg`,
    description: DESCRIPTION[randomNumber(0, DESCRIPTION.length - 1)],
    likes: randomNumber(15, 200),
    comments: randomNumber(0, 200)
  };
  return photo;
};

const generatePhotos = () => {
  const photos = [];
  for (let i = 1; i <= PHOTO_COUNT; i++){
    photos.push(createPhoto(i, `Photo №${i}`));
  }
  return photos;
};

const similarPhsotos = generatePhotos();
