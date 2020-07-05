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
        
        
        cy.request({
                method: 'POST',
                url: 'http://localhost:3001/login',
                body: {
                        type: "LOGIN",
                        username: 'Katharina_Bernier',
                        password: 's3cret'
                }

        }).then((resp) => {
                 cy.setLocalStorage('authState','{"actions":[{"type":"xstate.stop","activity":{"id":"performLogin","src":"performLogin","onDone":{"target":"authorized","actions":"onSuccess"},"onError":{"target":"unauthorized","actions":"onError"},"type":"xstate.invoke"}},{"type":"redirectHomeAfterLogin"}],"activities":{"performLogin":false},"meta":{},"events":[],"value":"authorized","context":{"user":{"id":"t45AiwidW","uuid":"6383f84e-b511-44c5-a835-3ece1d781fa8","firstName":"Edgar","lastName":"Johns","username":"Katharina_Bernier","password":"$2a$10$5PXHGtcsckWtAprT5/JmluhR13f16BL8SIGhvAKNP.Dhxkt69FfzW","email":"Norene39@yahoo.com","phoneNumber":"625-316-9882","avatar":"https://api.adorable.io/avatars/128/t45AiwidW.png","defaultPrivacyLevel":"public","balance":168137,"createdAt":"2019-08-27T23:47:05.637Z","modifiedAt":"2020-05-21T11:02:22.857Z"}},"_event":{"name":"done.invoke.performLogin","data":{"type":"done.invoke.performLogin","data":{"user":{"id":"t45AiwidW","uuid":"6383f84e-b511-44c5-a835-3ece1d781fa8","firstName":"Edgar","lastName":"Johns","username":"Katharina_Bernier","password":"$2a$10$5PXHGtcsckWtAprT5/JmluhR13f16BL8SIGhvAKNP.Dhxkt69FfzW","email":"Norene39@yahoo.com","phoneNumber":"625-316-9882","avatar":"https://api.adorable.io/avatars/128/t45AiwidW.png","defaultPrivacyLevel":"public","balance":168137,"createdAt":"2019-08-27T23:47:05.637Z","modifiedAt":"2020-05-21T11:02:22.857Z"}}},"$$type":"scxml","type":"external","origin":"performLogin"},"_sessionid":"x:0","event":{"type":"done.invoke.performLogin","data":{"user":{"id":"t45AiwidW","uuid":"6383f84e-b511-44c5-a835-3ece1d781fa8","firstName":"Edgar","lastName":"Johns","username":"Katharina_Bernier","password":"$2a$10$5PXHGtcsckWtAprT5/JmluhR13f16BL8SIGhvAKNP.Dhxkt69FfzW","email":"Norene39@yahoo.com","phoneNumber":"625-316-9882","avatar":"https://api.adorable.io/avatars/128/t45AiwidW.png","defaultPrivacyLevel":"public","balance":168137,"createdAt":"2019-08-27T23:47:05.637Z","modifiedAt":"2020-05-21T11:02:22.857Z"}}},"historyValue":{"current":"authorized","states":{}},"history":{"actions":[{"type":"xstate.start","activity":{"id":"performLogin","src":"performLogin","onDone":{"target":"authorized","actions":"onSuccess"},"onError":{"target":"unauthorized","actions":"onError"},"type":"xstate.invoke"}}],"activities":{"performLogin":{"type":"xstate.start","activity":{"id":"performLogin","src":"performLogin","onDone":{"target":"authorized","actions":"onSuccess"},"onError":{"target":"unauthorized","actions":"onError"},"type":"xstate.invoke"}}},"meta":{},"events":[],"value":"loading","context":{},"_event":{"name":"LOGIN","data":{"type":"LOGIN","username":"Katharina_Bernier","password":"s3cret"},"$$type":"scxml","type":"external"},"_sessionid":"x:0","event":{"type":"LOGIN","username":"Katharina_Bernier","password":"s3cret"},"historyValue":{"current":"loading","states":{}},"children":{},"done":false,"changed":true},"children":{},"done":false,"changed":true}')
        })

})
