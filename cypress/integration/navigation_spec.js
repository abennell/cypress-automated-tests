describe('Navigation tests', function() {
    beforeEach(() => {
        cy.login()
        cy.visit('http://localhost:3000')
    })

    it('should display the user\'s profile picture', function() {
        cy.get('img.MuiAvatar-img').should('have.attr','src','https://api.adorable.io/avatars/128/t45AiwidW.png')
    })
    
    it('should display the user\'s full name', function() {
        cy.get('h6.MuiTypography-subtitle1').should('contain', 'Edgar J')
    })

    it('should display the user\'s username', function () {
        cy.get('h6.MuiTypography-subtitle2').should('contain', '@Katharina_Bernier')
    })
    
    it('should have a link to the My Account page', function() {
        cy.contains('My Account').should('have.attr','href', '/user/settings')
    })

    it('should have a link to the Bank Accounts page', function() {
        cy.contains('Bank Accounts').should('have.attr','href', '/bankaccounts')
    })

    it('should have a link to the Notifications page', function() {
        cy.contains('Notifications').should('have.attr','href', '/notifications')
    })

    it('should log the user out successfully', function () {
        cy.contains('Logout').click()
        cy.contains('h1', 'Sign in')
    })


})