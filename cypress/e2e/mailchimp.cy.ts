import { logAccessibilityViolations } from "../support/accessibility"

describe('mailchimp signups', () => {
    const email = 'newsletter_test@startup-nights.ch'

    it('signs up for the newsletter', () => {
        cy.visit('/')

        cy.get('#newsletter-signup #firstname').type('Newsletter')
        cy.get('#newsletter-signup #lastname').type('Test')
        cy.get('#newsletter-signup #email').type(email)
        cy.get('#newsletter-signup button').click()

        cy.contains('Oh yes!')
        cy.contains('You are now subscribed to the newsletter.')
    })

    it('signs up for the preregistration', () => {
        cy.visit('/tickets')

        cy.get('#pre-register #firstname').type('Newsletter')
        cy.get('#pre-register #lastname').type('Test')
        cy.get('#pre-register #email').type(email)
        cy.get('#pre-register button').click()

        cy.contains('Oh yes!')
        cy.contains('You are now on the list for the pre-registration.')
    })
})
