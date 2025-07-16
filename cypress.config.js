const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      SERLO_ORG_PASSWORD: process.env.SERLO_ORG_PASSWORD,
    },
  },
});
