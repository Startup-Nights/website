describe('check for visual regression', () => {
    const viewports = [
        { width: 1280, height: 800, name: '13 inch macbook' },
        { width: 357, height: 667, name: 'iphone 7 & 8' },
        { width: 360, height: 760, name: 'samsung s10' },
    ]

    // TODO: figure out settings that return consistent results so that we can
    // move on and remove "ALLOW_VISUAL_REGRESSION_TO_FAIL" from the env 
    // settings in 'cypress.config.ts' to actually make use of vrt.
    const idleTime = 0 * 1000
    const snapshotSettings = {
        capture: 'fullPage',
        errorThreshold: 0.1
    }

    viewports.forEach(viewport => {
        const dimensionsPrefix = `${viewport.width}_${viewport.height}_`
        const testName = `${viewport.name}: `

        it(testName + 'landing page should not have changed', () => {
            cy.viewport(viewport.width, viewport.height)
            cy.visit('/')
            cy.wait(idleTime)
            cy.compareSnapshot(dimensionsPrefix + 'landing-page', snapshotSettings)
        })

        it(testName + 'tickets page should not have changed', () => {
            cy.viewport(viewport.width, viewport.height)
            cy.visit('/tickets')
            cy.wait(idleTime)
            cy.compareSnapshot(dimensionsPrefix + 'tickets', snapshotSettings)
        })

        it(testName + 'booth page should not have changed', () => {
            cy.viewport(viewport.width, viewport.height)
            cy.visit('/booth')
            cy.wait(idleTime)
            cy.compareSnapshot(dimensionsPrefix + 'booth', snapshotSettings)
        })

        it(testName + 'hiring page should not have changed', () => {
            cy.viewport(viewport.width, viewport.height)
            cy.visit('/hiring')
            cy.wait(idleTime)
            cy.compareSnapshot(dimensionsPrefix + 'hiring', snapshotSettings)
        })

        it(testName + 'partner page should not have changed', () => {
            cy.viewport(viewport.width, viewport.height)
            cy.visit('/partner')
            cy.wait(idleTime)
            cy.compareSnapshot(dimensionsPrefix + 'partner', snapshotSettings)
        })

        it(testName + 'about page should not have changed', () => {
            cy.viewport(viewport.width, viewport.height)
            cy.visit('/about')
            cy.wait(idleTime)
            cy.compareSnapshot(dimensionsPrefix + 'about', snapshotSettings)
        })

        it(testName + 'impression page should not have changed', () => {
            cy.viewport(viewport.width, viewport.height)
            cy.visit('/impressions')
            cy.wait(idleTime)
            cy.compareSnapshot(dimensionsPrefix + 'impressions', snapshotSettings)
        })

        it(testName + 'contact page should not have changed', () => {
            cy.viewport(viewport.width, viewport.height)
            cy.visit('/contact')
            cy.wait(idleTime)
            cy.compareSnapshot(dimensionsPrefix + 'contact', snapshotSettings)
        })
    })
})