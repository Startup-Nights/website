describe('check for visual regression', () => {
    const viewports = [
        { width: 1280, height: 800 }, // 13 inch macbook
        { width: 357, height: 667 }, // iphone 7 / iphone 8
        { width: 360, height: 760 }, // samsung s10
    ]

    viewports.forEach(viewport => {
        // prefix the files with the dimensions
        const dimensions = `${viewport.width}_${viewport.height}_`
        const name = `${viewport.width}x${viewport.height}: `

        it(name + 'landing page should not have changed', () => {
            cy.visit('/')
            cy.compareSnapshot(dimensions + 'landing-page', {
                capture: 'fullPage',
                errorThreshold: 0.2
            })
        })

        it(name + 'tickets page should not have changed', () => {
            cy.visit('/tickets')
            cy.compareSnapshot(dimensions + 'tickets', {
                capture: 'fullPage',
                errorThreshold: 0.2
            })
        })

        it(name + 'booth page should not have changed', () => {
            cy.visit('/booth')
            cy.compareSnapshot(dimensions + 'booth', {
                capture: 'fullPage',
                errorThreshold: 0.2
            })
        })

        it(name + 'hiring page should not have changed', () => {
            cy.visit('/hiring')
            cy.compareSnapshot(dimensions + 'hiring', {
                capture: 'fullPage',
                errorThreshold: 0.2
            })
        })

        it(name + 'partner page should not have changed', () => {
            cy.visit('/partner')
            cy.compareSnapshot(dimensions + 'partner', {
                capture: 'fullPage',
                errorThreshold: 0.2
            })
        })

        it(name + 'about page should not have changed', () => {
            cy.visit('/about')
            cy.compareSnapshot(dimensions + 'about', {
                capture: 'fullPage',
                errorThreshold: 0.2
            })
        })

        it(name + 'impression page should not have changed', () => {
            cy.visit('/impressions')
            cy.compareSnapshot(dimensions + 'impressions', {
                capture: 'fullPage',
                errorThreshold: 0.2
            })
        })

        it(name + 'contact page should not have changed', () => {
            cy.visit('/contact')
            cy.compareSnapshot(dimensions + 'contact', {
                capture: 'fullPage',
                errorThreshold: 0.2
            })
        })
    })
})