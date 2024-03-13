import type { JestConfigWithTsJest } from 'ts-jest';
import { defaultsESM as defaults } from 'ts-jest/presets';

/**
 * @see {@link https://github.com/kulshekhar/ts-jest/issues/1057/}
 */
const jestConfig: JestConfigWithTsJest = {
  ...defaults,
  errorOnDeprecated: true,
  injectGlobals: false,
  moduleFileExtensions: [
    // The most commonly used extensions should be listed first.
    // `js` must be included.
    'ts',
    'js',
  ],
  moduleNameMapper: {
    // Set `esModuleInterop` to `true` in `tsconfig.json`.
    '^(.+)\\.js$': '$1',
  },
  testRegex: /\.test\.ts$/.source,
};

export default jestConfig;
