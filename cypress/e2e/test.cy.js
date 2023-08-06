"use strict";
describe('My First Test', function () {
    it('Visits the app root url', function () {
        cy.visit('/');
        cy.contains('ion-content', 'Tab 1 page');
    });
});
