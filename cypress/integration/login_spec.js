describe('Login Page tests', function() {
    beforeEach(() => {
        cy.visit('http://localhost:3000/signin')
    })

    it('should greet with login', function(){
        cy.contains('h1','Sign in')
    })

    it('should have a link to sign up', function () {
        cy.contains('Don\'t have an account? Sign Up').should('have.attr' ,'href', '/signup')
    })

    it('should allow a valid user to login', function () {
       
        //Arrange
       
        //Act
        cy.get('#username').type('Katharina_Bernier')
        cy.get('#password').type('s3cret')
        cy.get('form').contains('Sign In').click()

        //Assert
        cy.get('span').contains('Logout').should('be.visible')
    })

    it('shouldn\'t allow an invalid user to login', function () {
       
        //Arrange

        //Act
        cy.get('#username').type('root')
        cy.get('#password').type('password')
        cy.get('form').contains('Sign In').click()

        //Assert
        cy.get('.MuiAlert-message').should('contain', 'Username or password is invalid')
    })

})
