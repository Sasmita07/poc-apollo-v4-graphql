import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/modules/**/schemas/*.graphql',
  generates: {
    './src/modules/': {
      preset: 'graphql-modules',
      presetConfig: {
        baseTypesPath: '../__generated-types__/graphql.ts',
        filename: '__generated-types__/module-types.ts',
      },
      plugins: [
        {
          add: {
            content: '/* eslint-disable */',
          },
        },
        'typescript',
        'typescript-resolvers',
      ],
    },
  },
};
export default config;
