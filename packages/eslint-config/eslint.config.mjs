import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const baseConfig = tseslint.config(
  {
    ignores: [
      'dist/**',
      'build/**',
      'node_modules/**',
      'coverage/**',
      '*.tsbuildinfo',
      '.next/**',
      '.vite/**',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  prettier
);

export const nodeConfig = tseslint.config(...baseConfig, {
  files: ['**/*.{ts,js}'],
  languageOptions: {
    globals: globals.node,
  },
  rules: {
    'no-console': 'warn',
  },
});

export const reactConfig = tseslint.config(...baseConfig, {
  files: ['**/*.{tsx,jsx}'],
  plugins: {
    react,
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
  },
  languageOptions: {
    globals: globals.browser,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    ...react.configs.recommended.rules,
    ...reactHooks.configs.recommended.rules,
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
});

export default baseConfig;
