import { logAccessibilityViolations } from "../support/accessibility"

describe('accessibility', () => {
    const pages = [
        '/',
        '/about',
        '/startup-city-winterthur',
        '/hiring',
        '/program',
        '/crop',
        '/speakers',
        '/tickets',
        '/terms-and-conditions',
        '/privacy-policy',
        '/imprint',
        '/booth',
        '/startups',
        '/contact',
        '/impressions',
        '/partner',
        '/partner-documentation',
        '/partner-info',
        '/pitching',
        '/faq',
    ]

    pages.forEach(page => {
        it(`'${page}' has no detectable a11y violations upon page load`, () => {
            cy.visit(page)
            cy.injectAxe()
            cy.checkA11y(null, null, logAccessibilityViolations)
        })
    })
})
