import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettierConfig from 'eslint-config-prettier'; // Prettier এর সাথে ঝামেলা এড়াতে

export default [
  {
    // ১. যে ফোল্ডারগুলো চেক করার দরকার নেই
    ignores: ['dist', 'node_modules', '.vscode'],
  },
  {
    // ২. কোন কোন ফাইলে এই রুলস কাজ করবে
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node, // Node.js এনভায়রনমেন্টও অ্যাড করে দিলাম
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // ৩. বেসিক রিকমেন্ডেড রুলস
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // ৪. তোমার কাস্টম রুলস
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  // ৫. সবশেষে Prettier অ্যাড করা যাতে ফরম্যাটিং নিয়ে কোনো এরর না আসে
  prettierConfig,
];
