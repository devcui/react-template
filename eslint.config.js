import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import recommendedConfig from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  recommendedConfig,
  {
    name: 'Main Config',
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_'
        }
      ],
      '@typescript-eslint/no-floating-promises': 'off',
      'no-await-in-loop': 'error',
      'no-constructor-return': 'error',
      'no-self-compare': 'error',
      'no-unreachable-loop': 'error',
      'no-console': 'warn'
    }
  },
  {
    files: ['**/*.mjs', '**/*.cjs', '**/*.js'],
    extends: [tseslint.configs.disableTypeChecked]
  },
  {
    ignores: [
      'node_modules',
      'build',
      'assets',
      '**/dist',
      '.prettierrc.js',
      'types/**',
      'output.js',
      'tailwind.config.js'
    ]
  }
);
