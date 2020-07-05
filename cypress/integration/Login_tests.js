describe('Login Page tests ', function() {

    it('Should allow a valid user to login', function () {
       
        //Arrange
        cy.visit('http://localhost:3000/signin')

        //Act
        cy.get('#username').type('Katharina_Bernier')
        cy.get('#password').type('s3cret')
        cy.get('form').contains('Sign In').click()

        //Assert
        cy.get('span').contains('Logout').should('be.visible')
        // expect(.to.be.visible()
    })

    it('Shouldn\'t allow an invalid user to login', function () {
       
        //Arrange
        cy.visit('http://localhost:3000/signin')

        //Act
        cy.get('#username').type('root')
        cy.get('#password').type('password')
        cy.get('form').contains('Sign In').click()

        //Assert
        cy.get('.MuiAlert-message').should('contain', 'Username or password is invalid')
    })

})
