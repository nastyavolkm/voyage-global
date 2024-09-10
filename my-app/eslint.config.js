const react = require ('eslint-plugin-react');
const globals = require ('globals');
const  pluginJs  = require('@eslint/js');
const tsEslint = require ('typescript-eslint');
const pluginReact = require ('eslint-plugin-react');

module.exports = [
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react, pluginJs, tsEslint, pluginReact,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
    },
  },
];
