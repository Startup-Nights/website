describe('verify basic cypress configuration', () => {
    it('visits ' + Cypress.config().baseUrl, () => {
        cy.visit('/')
        // button might be behind the consent modal -> force the click
        cy.contains('Pre-register 2024').click({ force: true })
        cy.url().should('include', '/tickets')
    })
})
