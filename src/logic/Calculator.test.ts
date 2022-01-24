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

test("getNumber works D=5 1", () => {
  expect(getNumber(47291, 5).number).toBe(0.36438);
});

test("getNumber works D=5 2", () => {
  expect(getNumber(getNumber(47291, 5).seed, 5).number).toBe(0.27727);
});

test("getNumber works D=5 3", () => {
  expect(getNumber(getNumber(getNumber(47291, 5).seed, 5).seed, 5).number).toBe(
    0.87865
  );
});
