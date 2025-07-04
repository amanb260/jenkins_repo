/// <reference types="@shelex/cypress-allure-plugin" />


// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

import '@shelex/cypress-allure-plugin';

import 'cypress-file-upload';



// const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// // import allureWriter from "@shelex/cypress-allure-plugin/writer";

// module.exports = (on, config) => {
//     allureWriter(on, config);
//     return config;
// };

