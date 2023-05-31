import { defineConfig } from "cypress";
import getCompareSnapshotsPlugin from 'cypress-visual-regression/dist/plugin';

export default defineConfig({
  env: {
    type: 'actual',
    screenshotsFolder: './cypress/snapshots/actual',
    trashAssetsBeforeRuns: true,
    video: false
  },
  e2e: {
    // default: dimensions of a 13 inch macbook
    viewportHeight: 800,
    viewportWidth: 1280,
    baseUrl: 'https://www.startup-nights.ch',
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
    },
  },
});
