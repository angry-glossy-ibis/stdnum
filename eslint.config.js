// @ts-check

import stylistic from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';

// const config = tseslint.config(
// js.configs.recommended,
// tseslint.configs.strictTypeChecked,
// ...tseslint.configs.stylisticTypeChecked,
// );

//  tseslint.config(
//   ...tseslint.configs.recommended,
//   {
//     rules: {
//       '@typescript-eslint/array-type': 'error',
//     },
//   },
// );

// const ts = tseslint.configs.strictTypeChecked;

//  *  | import('@stylistic/eslint-plugin')}
//  * import('typescript-eslint').Config}

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
const config = [
  {
    ignores: [
      '*',
      '!**/*.{js,ts,tsx}',
      '!src/',
      '**/*.d.ts',
      '**/.next/**',
      '**/coverage/**',
      '**/dist/**',
      '**/out/**',
    ],
  },
  {
    files: [
      '**/*.{js}',
    ],
    ...stylistic.configs.customize({
      flat: true,
      quoteProps: 'as-needed',
      semi: true,
    }),
  },
  // {
  //   files: [
  //     '**/*.ts',
  //   ],
  //   // ...ts[0],
  //   languageOptions: {
  //     ...ts[0].languageOptions,
  //     parserOptions: {
  //       ...ts[0].languageOptions?.parserOptions,

  //       /**
  //        * https://typescript-eslint.io/getting-started/typed-linting/monorepos/
  //        */
  //       project: [
  //         './tsconfig.json',
  //         './src/*/tsconfig.json',
  //       ],
  //       // tsconfigRootDir: import.meta.dirname,
  //     },
  //   },
  //   plugins: {
  //     ...ts[0].plugins,
  //   },
  //   rules: {
  //     ...ts[1].rules,
  //     ...ts[2].rules,
  //   },
  // },
];

// tseslint.configs.strictTypeChecked.reduce((prev, curr) => {
//   return { ...prev, ...curr };
// }, {}),

// console.log(
//   tseslint.config(
//     ...tseslint.configs.strictTypeChecked,
//     {

//     },
//   ),
// );

// console.log();

export default config;
