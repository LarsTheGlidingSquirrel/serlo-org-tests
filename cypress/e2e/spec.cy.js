/// <reference types="cypress" />

// describe("https://serlo.org/auth/login", () => {
//   beforeEach(() => {
//     // Cypress starts out with a blank slate for each test
//     // so we must tell it to visit our website with the `cy.visit()` command.
//     // Since we want to visit the same URL at the start of all our tests,
//     // we include it in our beforeEach function so that it runs before each test
//     cy.visit("https://serlo.org/auth/login");
//   });

//   it("allows user to log in", () => {
//
//   });
// });

describe("https://serlo.org/", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("https://serlo.org/");
  });

  it("shows link to 'Fächer'", () => {
    cy.contains("Fächer");
  });
});
