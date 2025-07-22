// Login or reuse existing session
Cypress.Commands.add(
  "loginOrReuseSession",
  ({ user, password, expectSuccess }) => {
    cy.session([user, password], () => {
      cy.visit("https://de.serlo.org/auth/login");
      cy.get('input[name="identifier"]').type(user);
      cy.get('input[name="password"]').type(password);
      cy.contains("button", "Anmelden").click();
      if (expectSuccess) {
        cy.url({ timeout: 10000 }).should("eq", "https://de.serlo.org/");
      } else {
        // User stays on login page on failed login
        cy.url({ timeout: 10000 }).should(
          "eq",
          "https://de.serlo.org/auth/login"
        );
        cy.contains(
          "Der Benutzername, die E-Mail-Adresse oder das Passwort stimmen so nicht. Bitte überprüfe deine Eingabe."
        );
      }
    });
  }
);
