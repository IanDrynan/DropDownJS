module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    // If you're using React, uncomment the following:
    // ecmaVersion: 2021, // Use a modern ECMAScript version
    // sourceType: 'module',
    // ecmaFeatures: {
    //   jsx: true, // Allows for the parsing of JSX
    // },
  },

  extends: ["eslint:recommended", "plugin:prettier/recommended"],

  rules: {
    "no-unused-vars": ["warn", { args: "none" }],
  },

  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },

  plugins: ["@typescript-eslint", "react", "react-hooks"],
};
