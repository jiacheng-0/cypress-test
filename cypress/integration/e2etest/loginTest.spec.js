describe('My First Testcase', () => {

    beforeEach(() => {
        cy.visit('/')
    })    

    it('Login Page Loads Correctly', () => {
        cy.contains('Welcome to Application')
    })

    it ('Checking for missing input', () => {
        cy.get('[data-cy=submit-input]').click()
        cy.get('.v-messages__message').eq(0).contains('Email is required')
        cy.get('.v-messages__message').eq(1).contains('Password is required')
    })

    it ('Checking for invalid input', () => {
        cy.get('[data-cy=submit-input]').click()
        cy.get('.v-messages__message').eq(0).contains('Email is required')
        cy.get('.v-messages__message').eq(1).contains('Password is required')
        
        cy.get('[data-cy=email-input]').type("example")
        cy.get('.v-messages__message').eq(0).contains('Enter valid email')
    })

    it ('Login successful', () => {
        cy.get('[data-cy=email-input]').type('example@gmail.com')
        cy.get('[data-cy=password-input]').type('password')
        cy.get('[data-cy=submit-input]').click()
        cy.get('[data-cy=message-input]').contains('Login successful')
    })




})
