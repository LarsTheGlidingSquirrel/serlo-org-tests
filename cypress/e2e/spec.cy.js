/// <reference types="cypress" />

describe("https://serlo.org/", () => {
  it("is available in German", () => {
    cy.visit("https://de.serlo.org/");
  });
  it("is available in English", () => {
    cy.visit("https://en.serlo.org/");
  });
  it("is available in Spanish", () => {
    cy.visit("https://es.serlo.org/");
  });
});

it("User can log in", () => {
  cy.loginOrReuseSession({
    user: "LarsTest",
    password: Cypress.env("SERLO_ORG_PASSWORD"),
    expectSuccess: true,
  });
});

it("User can't login with incorrect password", () => {
  cy.loginOrReuseSession({
    user: "LarsTest",
    password: "incorrect-password",
    expectSuccess: false,
  });
});

describe("Logged in users can", () => {
  beforeEach(() => {
    cy.loginOrReuseSession({
      user: "LarsTest",
      password: Cypress.env("SERLO_ORG_PASSWORD"),
      expectSuccess: true,
    });
  });
  it("open Serlo Editor", () => {
    cy.visit("https://de.serlo.org/entity/repository/add-revision/277232");
    cy.get(".plugin-type-article");
  });
});

describe("Non-logged in users can", () => {
  it("not open Serlo Editor", () => {
    cy.visit("https://de.serlo.org/entity/repository/add-revision/277232");
    // Link to login is shown
    cy.get('a[href="/auth/login"]').should("exist");
    // Serlo Editor is not shown
    cy.get(".plugin-type-article").should("not.exist");
  });
});
