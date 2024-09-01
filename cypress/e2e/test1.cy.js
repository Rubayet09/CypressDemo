/// <reference types="cypress"/>
it('Google Search', function(){
    cy.visit('https://google.com')
    cy.get('#APjFqb').type('Cypress Tutorial{Enter}')
    cy.contains('Google Search').click()
    cy.get('#rso > :nth-child(1) > .g > .N54PNb > .jGGQ5e > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').click()
}
)