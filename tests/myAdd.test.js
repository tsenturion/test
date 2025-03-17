
const { add } = require('../myAdd');

describe('add function', () => {

it('should handle decimal numbers correctly', () => {
  const result = add(3.14, 2.86);
  expect(result).toBeCloseTo(6, 2);
});

it('should handle large numbers without losing precision', () => {
  const result = add(Number.MAX_SAFE_INTEGER, 1);
  expect(result).toBe(Number.MAX_SAFE_INTEGER + 1);
});

it('should return NaN when adding a number and a non-numeric value', () => {
  const result = add(5, 'not a number');
  expect(result).toBeNaN();
});

it('should correctly add the maximum safe integer with a small number', () => {
  const maxSafeInteger = Number.MAX_SAFE_INTEGER;
  const smallNumber = 42;
  const result = add(maxSafeInteger, smallNumber);
  expect(result).toBe(maxSafeInteger + smallNumber);
});

it('should return Infinity when the result exceeds Number.MAX_VALUE', () => {
  const result = add(Number.MAX_VALUE, Number.MAX_VALUE);
  expect(result).toBe(Infinity);
});
});

