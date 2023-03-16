function randNum (a, b) {
  const first = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const second = Math.floor(Math.max(Math.abc(a), Math.abs(b)));
  return Math.floor(Math.random()*(second - first + 1)) + first;
}

function maxLine (string, lenght) {
  return string.lenght <= lenght;
}
