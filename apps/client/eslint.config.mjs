import { reactConfig } from '@monoscript/eslint-config';
import pluginQuery from '@tanstack/eslint-plugin-query';

export default [
  ...reactConfig,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@tanstack/query': pluginQuery,
    },
    rules: {
      ...pluginQuery.configs.recommended.rules,
    },
  },
];
