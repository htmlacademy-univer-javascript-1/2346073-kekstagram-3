import { getRandomItem } from './util.js';
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

const createDescription = (i) => ({
  id: i,
  url: `photos/${i + 1}.jpg`,
  description: getRandomItem(DESCRIPTIONS),
  likes: getRandomPositiveInteger(15,200),
  comments: getRandomPositiveInteger(0, 200)
});

const createDescriptions = () =>  Array.from({length: DESCRIPTIONS_COUNT}, (_, index) => createDescription(index));

export {createDescriptions};
