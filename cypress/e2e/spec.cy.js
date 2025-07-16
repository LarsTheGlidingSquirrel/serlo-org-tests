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

describe("https://de.serlo.org/auth/login", () => {
  beforeEach(() => {
    cy.visit("https://de.serlo.org/auth/login");
  });

  it("allows user to log in", () => {
    cy.get('input[name="identifier"]').type("LarsTest");
    cy.get('input[name="password"]').type(Cypress.env("SERLO_ORG_PASSWORD"));
    cy.contains("button", "Anmelden").click();
    // User gets redirected to home on successful login
    cy.url({ timeout: 10000 }).should("eq", "https://de.serlo.org/");
  });
});

describe("Serlo Editor test article", () => {
  it("opens without error", () => {
    cy.visit("https://de.serlo.org/auth/login");
    cy.get('input[name="identifier"]').type("LarsTest");
    cy.get('input[name="password"]').type(Cypress.env("SERLO_ORG_PASSWORD"));
    cy.contains("button", "Anmelden").click();
    // User gets redirected to home on successful login
    cy.url({ timeout: 10000 }).should("eq", "https://de.serlo.org/");
    cy.visit("https://de.serlo.org/entity/repository/add-revision/277232");
    cy.get(".plugin-type-article");
  });
});
