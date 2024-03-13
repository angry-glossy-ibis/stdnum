import type { CheckDigit10 } from './check-digit-10.js';

export type CheckDigit13 = Exclude<CheckDigit10, 'X'>;
