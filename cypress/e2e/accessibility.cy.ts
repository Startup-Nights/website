import { logAccessibilityViolations } from "../support/accessibility"

describe('accessibility', () => {
    const viewports = [
        'iphone-6',
        'macbook-11',
        'macbook-16'
    ]

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

    const axeConfig = {
        rules: [
            {
                // skip error on non-hierarchical headings
                id: 'heading-order',
                enabled: false
            }
        ]
    }

    viewports.forEach(viewport => {
        pages.forEach(page => {
            it(`${viewport}: '${page}' has no detectable a11y violations upon page load`, () => {
                cy.viewport(viewport)

                cy.visit(page)
                cy.injectAxe()

                cy.configureAxe(axeConfig)

                cy.checkA11y(null, null, logAccessibilityViolations)
            })
        })
    })
})
