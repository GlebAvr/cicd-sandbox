const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "@shelex/cypress-allure-plugin", // Use Allure reporter
  reporterOptions: {
    allureResultsPath: "cypress/allure-results", // Set the location for the allure results
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});