import { defineConfig } from "cypress";

export default defineConfig({
    defaultCommandTimeout: 10000,
    viewportWidth: 1200,
    viewportHeight: 1000,
    screenshotOnRunFailure: false,
    video: false,
    reporter: 'mochawesome',
    reporterOptions: {
        reportDir: 'cypress/results',
        reportFilename: "[datetime]_[name]_[status]",
        timestamp: "yyyy-mm-dd",
        overwrite: false,
        html: false,
        json: true,
    },
    e2e: {},
});
