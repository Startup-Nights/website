import { logAccessibilityViolations } from "../support/accessibility"
import { viewports, pages } from "../support/constants"

describe('accessibility', () => {
    // disable specific rules of the axe linter
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
                // @ts-ignore
                cy.viewport(viewport)

                cy.visit(page)
                cy.injectAxe()

                cy.configureAxe(axeConfig)

                cy.checkA11y(null, null, logAccessibilityViolations)
            })
        })
    })
})
