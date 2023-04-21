/// <reference types="cypress" />

describe('Primer test',() => {
    const numeroRandom = Math.ceil(Math.random() * 1000)

    it("Deberia registrarse en el sistema correctamente", () => {
        cy.visit('https://pushing-front.vercel.app/');
        cy.get('#user').type('pushingit' +numeroRandom);
        cy.get('#user').clear();
        cy.get('#user').type('pushingit' +numeroRandom);
        cy.get('#pass').type('123456!', {log:false});
        cy.get("[value='Male']").check({force:true});
        cy.get('#day').select('1');
        cy.get('#month').select('June');
        cy.get('#year').select(90);
        cy.get('#submitForm').click();
        cy.get('#todolistlink');
        

    });
});