describe('Navigation tests', function() {
    beforeEach(() => {
        cy.login()
    })
    
    it('Should log the user out successfully', function () {
        cy.contains('Logout').click()
        cy.contains('h1', 'Sign in')
    })
})