/// <reference types="Cypress" />

describe('Page tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Tests the page loads with the weekly numbers', () => {
    cy.get('.work').contains('32hrs');
    cy.get('.work').contains('Last Week - 36hrs');
  });
});
