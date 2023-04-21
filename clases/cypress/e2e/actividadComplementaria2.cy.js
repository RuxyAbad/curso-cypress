//todos los selectores deben ser modificados y utilizar una expresion diferente ya sea con
//css selector o con un metodo de cypress

// <reference types="cypress" />
describe("Actividad complementaria 2", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('Actividad complementaria 2', () =>{
        cy.visit('https://pushing-front.vercel.app/');
        cy.get('[name="user"]').type(`pushingit${numero}`); 
        cy.get('#user').clear()
        cy.get('#user').type(`pushingit${numero}`);
        cy.get('.password').type('123456!');
        cy.get('[value=Female]').check({force:true});
        cy.get('#day').select('10')
        cy.get('[name="month"]').select('October')
        cy.get('#year').select(10)
        cy.get('button').click()
        cy.wait(5000)
    });
});