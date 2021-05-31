"use strict";
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12,
  
  },
  rules: {
    "no-unused-vars": 1,
    "no-undef": 2,
    "no-empty": 1,
    strict: 1,
  },
};
