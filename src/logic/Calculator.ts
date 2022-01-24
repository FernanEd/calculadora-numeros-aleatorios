const getNumber = (seed: number, d: number) => {
  let squared = String(seed ** 2);

  let offset = d % 2 == 0 || squared.length % 2 != 0 ? 2 : 3;

  let nextNumberString = squared.substr(
    Math.trunc(squared.length / 2) - offset,
    d
  );

  return {
    seed: Number(nextNumberString),
    number: Number(`0.${nextNumberString}`),
  };
};

export default getNumber;
