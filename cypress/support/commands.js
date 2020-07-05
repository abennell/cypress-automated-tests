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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

//Add a new library to handle modification of local storage
import "cypress-localstorage-commands"

//This will give me a new login command I can use in any test which requires the user to be authenticated.
Cypress.Commands.add('login', () => {

        cy.visit('http://localhost:3000/signin')
        cy.get('#username').type('Katharina_Bernier')
        cy.get('#password').type('s3cret')
        cy.get('form').contains('Sign In').click()

})
