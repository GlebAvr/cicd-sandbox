const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mocha-allure-reporter",
  reporterOptions: {
    targetDir: "cypress/allure-results",  // Specify where to save the Allure results
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
