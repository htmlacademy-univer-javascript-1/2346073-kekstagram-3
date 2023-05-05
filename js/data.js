import {getRandomPositiveInteger} from './util.js';

const DESCRIPTIONS = [
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

const DESCRIPTIONS_COUNT = 25;
let idNumber = 1;
let urlNumber = 1;

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createDescription = () => ({
  id: idNumber++ ,
  url: `photos/${urlNumber++}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(15,200),
  comments: getRandomPositiveInteger(0, 200)
});

const arrayOfDescription = () =>  Array.from({length: DESCRIPTIONS_COUNT}, createDescription);

export {arrayOfDescription};
