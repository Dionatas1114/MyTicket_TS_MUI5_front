const getRandomNumber = (min: number = 10, max: number = 99, round = true): number => {
  const randomNumber = Math.random() * (max - min + 1) + min;
  return round ? Math.floor(randomNumber) : randomNumber;
};

export { getRandomNumber };
