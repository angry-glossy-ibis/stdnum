import type { CheckDigit10 } from './types/check-digit-10.js';

/**
 * Calculates the check digit for a 10-digit ISBN.
 */
function CalculateCheckDigit10(isbn: string): CheckDigit10 {
  const divisor = 11;
  // const { length } = isbn;
  const length = isbn.length;
  let index = length - 2;
  let sum = 0;
  do {
    sum += Number(isbn[index]) * (length - index);
    index -= 1;
  } while (index >= 0);
  const value = (divisor - (sum % divisor)) % divisor;
  return ((value === 10) ? 'X' : value.toString()) as CheckDigit10;
}

export {
  CalculateCheckDigit10,
};
