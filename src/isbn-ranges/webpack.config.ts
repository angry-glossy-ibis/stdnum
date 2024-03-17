import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import TerserPlugin from 'terser-webpack-plugin';
import type { Configuration } from 'webpack';
import webpack from 'webpack';

// Use instead of `__filename`.
const filePath = fileURLToPath(import.meta.url);

// Use instead of `__dirname`.
const rootDirectoryPath = dirname(filePath);

const outputDirectoryPath = resolve(rootDirectoryPath, 'bin');
const sourceDirectoryPath = resolve(rootDirectoryPath, 'src');

const commonWebpackConfig: Configuration = {
  context: rootDirectoryPath,
  entry: {
    main: resolve(sourceDirectoryPath, 'index.ts'),
  },
  experiments: {
    outputModule: true,
  },
  externals: [
    'commander',
  ],
  externalsType: 'module',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
    ],
  },
  output: {
    clean: false, // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    filename: '[name].js',
    library: {
      type: 'module',
    },
    module: true,
    path: outputDirectoryPath,
  },
  module: {
    rules: [
      {
        // exclude: [
        //     '/node_modules/',
        // ],
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              onlyCompileBundledFiles: true,
              useCaseSensitiveFileNames: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: '#!/usr/bin/env node',
      raw: true,
    }),
  ],
  resolve: {
    //   // alias: {
    //   //     '@App': sourceDirectoryPath,
    //   // },
    extensionAlias: {
      /** @see {@link https://github.com/webpack/webpack/releases/tag/v5.74.0} */
      '.js': [
        '.ts',
      ],
    },
    extensions: [
      '.ts',
      '.js',
    ],
    //   // mainFiles: [
    //   //   'index',
    //   // ],
    //   // modules: [
    //   //   sourceDirectoryPath,
    //   //   'node_modules',
    //   // ],
    //   // plugins: [
    //   //   // Handles `paths` from `tsconfig.json`.
    //   //   new TsconfigPathsPlugin({
    //   //     extensions: [
    //   //       '.ts',
    //   //     ],
    //   //   }),
    //   // ],
  },
  target: 'node20.11',
};

/**
 * @see {@link https://github.com/webpack/webpack/issues/11630/}
 */
export default (
  _: Record<string, unknown>,
  argv: Record<string, unknown>,
): Configuration => {
  const production = (argv['nodeEnv'] === 'production');
  // or process.env.NODE_ENV == 'production'?

  const additionalWebpackConfig: Configuration = {
    // devtool: production ? 'source-map' : 'eval-source-map',
    mode: production ? 'production' : 'development',
    // name: production ? 'prod-webpack-config' : 'dev-webpack-config',
  };
  return Object.assign(commonWebpackConfig, additionalWebpackConfig);
};
