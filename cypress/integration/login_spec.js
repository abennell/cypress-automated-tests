describe('Login Page tests', function() {
    beforeEach(() => {
        cy.visit('/signin')
    })

    it('should greet with login', function(){
        cy.contains('h1','Sign in')
    })

    it('should have a link to sign up', function () {
        cy.contains('Don\'t have an account? Sign Up').should('have.attr' ,'href', '/signup')
    })


    it('should require a username', function() {
        //Act
        cy.get('#password').type('password')


        //Assert
        cy.get('form').contains('Sign In').should('be.disabled')
    })

    it('should require a password', function() {
        //Act
        cy.get('#username').type('root')

        //Assert
        cy.get('form').contains('Sign In').should('be.disabled')
    })

    it('should require a username and password', function() {
        //Act
        cy.get('form').contains('Sign In').click()

        //Assert
        cy.get('#username-helper-text').contains('Username is required')

   
    })

    it('shouldn\'t allow an invalid user to login', function () {
       

        //Act
        cy.get('#username').type('root')
        cy.get('#password').type('password')
        cy.get('form').contains('Sign In').click()

        //Assert
        cy.get('.MuiAlert-message').should('contain', 'Username or password is invalid')
    })

    it('should allow a valid user to login', function () {
       
       
        //Act
        cy.get('#username').type('Katharina_Bernier')
        cy.get('#password').type('s3cret')
        cy.get('form').contains('Sign In').click()

        //Assert
        cy.contains('Logout').should('be.visible')
    })



})
