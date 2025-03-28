import type { StorybookConfig } from '@storybook/nextjs';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test',
  ],
  docs: {
    autodocs: 'tag',
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['..\\public'],
  /**
   * Configure webpack to resolve modules according to tsconfig.json.
   *
   * In order to use absolute imports with Next.js, we need to configure webpack
   * to resolve modules according to tsconfig.json. This is done by adding the
   * TsconfigPathsPlugin to the list of plugins used by webpack.
   *
   * @param {import('webpack').Configuration} config The current webpack config.
   * @returns {import('webpack').Configuration} The modified webpack config.
   */
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: config.resolve.extensions,
        }),
      ];
    }
    return config;
  },
};
export default config;
