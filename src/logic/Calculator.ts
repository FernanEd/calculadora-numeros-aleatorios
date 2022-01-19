const getRandomNumber = (seed: number, d: number) => {
  let squared = String(seed ** 2);
  let offset = 2;
  let nextNumberString = squared.substr(
    Math.trunc(squared.length / 2) - offset,
    d
  );

  return {
    seed: Number(nextNumberString),
    number: Number(`0.${nextNumberString}`),
  };
};

export default getRandomNumber;
