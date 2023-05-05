const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
getRandomPositiveInteger(0,10);

const lengthString = (string, maxLength) => string.length <= maxLength;
lengthString('123',4);

export{getRandomPositiveInteger, lengthString};