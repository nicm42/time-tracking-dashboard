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

  it('Tests the daily numbers show when Daily is pressed', () => {
    cy.get('button').eq(0).click();

    cy.get('.work').contains('5hrs');
    cy.get('.work').contains('Last Day - 7hrs');

    cy.get('.play').contains('1hrs');
    cy.get('.play').contains('Last Day - 2hrs');

    cy.get('.study').contains('0hrs');
    cy.get('.study').contains('Last Day - 1hrs');

    cy.get('.exercise').contains('1hrs');
    cy.get('.exercise').contains('Last Day - 1hrs');

    cy.get('.social').contains('1hrs');
    cy.get('.social').contains('Last Day - 3hrs');

    cy.get('.self-care').contains('0hrs');
    cy.get('.self-care').contains('Last Day - 1hrs');
  });

  it('Tests the weekly numbers show when Weekly is pressed', () => {
    cy.get('button').eq(1).click();

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

  it('Tests the monthly numbers show when Monthly is pressed', () => {
    cy.get('button').eq(2).click();

    cy.get('.work').contains('103hrs');
    cy.get('.work').contains('Last Month - 128hrs');

    cy.get('.play').contains('23hrs');
    cy.get('.play').contains('Last Month - 29hrs');

    cy.get('.study').contains('13hrs');
    cy.get('.study').contains('Last Month - 19hrs');

    cy.get('.exercise').contains('11hrs');
    cy.get('.exercise').contains('Last Month - 18hrs');

    cy.get('.social').contains('21hrs');
    cy.get('.social').contains('Last Month - 23hrs');

    cy.get('.self-care').contains('7hrs');
    cy.get('.self-care').contains('Last Month - 11hrs');
  });
});
