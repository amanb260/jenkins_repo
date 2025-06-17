// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@shelex/cypress-allure-plugin';
require('cypress-xpath')
require('cypress-downloadfile/lib/downloadFileCommand');
Cypress.Commands.add('addWait',()=>{
  cy.wait(2000)
})


Cypress.Commands.add('takeScreenshotAndAttachToAllure', (stepMessage) => {
  const screenshotName = `${stepMessage.replace(/\s+/g, '_')}`;
  const screenshotPath = `cypress/screenshots/${screenshotName}.png`;
 
  cy.screenshot(screenshotName, { capture: 'runner' }).then(() => {
    cy.wait(1000);
 
    cy.task('getScreenshotAbsolutePath', { screenshotPath }).then((absolutePath) => {
      cy.readFile(absolutePath, 'binary').then((fileContent) => {
        cy.allure().attachment(stepMessage, fileContent, 'image/png');
      });
    });
  });
});