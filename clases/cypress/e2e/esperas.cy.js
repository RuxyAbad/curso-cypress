/// <reference types="cypress" />
const TIMEOUT = 30000

describe('Esperas', () => {
    let datosFixture;

    before('Before', () => { 
        cy.fixture('fixture').then(data => {
            datosFixture = data
        })
    });

    beforeEach("precondicones", () => { 
        cy.visit('/')
        cy.get('#registertoggle').dblclick();
        cy.get('#user').type(datosFixture.usuario.usuario)
        cy.get('#pass').type(datosFixture.usuario.password)
        cy.contains('Log in').click();
        cy.get('#waitslink').click();
        cy.get('#wait').dblclick();  
    });

    it('Deberiamos esperar estaticamente que aparezca el button', ()=> {
        cy.wait(10000)
        cy.get('#message').should('have.text', 'You have waited for ten seconds, CONGRATULATIONS')
    });

    it('Deberiamos esperar estaticamente que aparezca el button', ()=> {
        cy.get('#message', {timeout:TIMEOUT}).should('have.text', 'You have waited for ten seconds, CONGRATULATIONS')
    });

    it('Deberiamos esperar estaticamente que aparezca el button', ()=> {
        cy.get('#message', {timeout:TIMEOUT}).should('have.text', 'You are a man of patience and have waited fifteen seconds')
    });

    it.only('Deberiamos esperar estaticamente que aparezca el button', ()=> {
        cy.get('[role="progressbar"]',{timeout:TIMEOUT}).should('not.exist')
        cy.get('#message').should('have.text', 'You have waited for ten seconds')
    });
});