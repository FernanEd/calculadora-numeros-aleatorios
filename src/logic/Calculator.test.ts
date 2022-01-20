import getNumber from "./Calculator";

test("getNumber 1 works", () => {
  expect(getNumber(1111, 4).number).toBe(0.2343);
});

test("getNumber 2 works", () => {
  expect(getNumber(getNumber(1111, 4).seed, 4).number).toBe(0.4896);
});

test("getNumber 3 works", () => {
  expect(getNumber(getNumber(getNumber(1111, 4).seed, 4).seed, 4).number).toBe(
    0.9708
  );
});
