const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // você pode adicionar eventos aqui, se necessário
    },
    supportFile: 'C:/Users/Iury Teixeira/Desktop/S206-Lista/Cypress-Projeto/Cypress-Projeto/cypress/support/e2e.js',
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: false,
      json: true
    }
  }
});



