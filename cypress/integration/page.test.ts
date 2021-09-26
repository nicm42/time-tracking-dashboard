/// <reference types="Cypress" />

describe('Page tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Tests the page loads with the weekly numbers', () => {
    cy.get('.work').contains('32hrs');
    cy.get('.work').contains('Last Week - 36hrs');

    cy.get('.play').contains('10hrs');
    cy.get('.play').contains('Last Week - 8hrs');

    cy.get('.study').contains('4hrs');
    cy.get('.study').contains('Last Week - 7hrs');

    cy.get('.exercise').contains('4hrs');
    cy.get('.exercise').contains('Last Week - 5hrs');

    cy.get('.social').contains('5hrs');
    cy.get('.social').contains('Last Week - 10hrs');

    cy.get('.self-care').contains('2hrs');
    cy.get('.self-care').contains('Last Week - 2hrs');
  });
});
