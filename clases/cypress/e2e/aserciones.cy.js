/// <reference types="cypress" />

describe('aserciones', () => {
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
    });

    it('Primera asercion utilizando should', () => {
        cy.get('#title').should('have.text', 'Waits')
    });

    it('Primera asercion utilizando expect', () => {
        cy.get('#title').invoke('text').then(texto => {
            expect(texto).is.equal('Waits')
        });
    });

    it('Primera asercion utilizando assert', () => {
        cy.get('#title').invoke('text').then(texto => {
            assert.equal(texto,"Waits")
        });
    });

    it('Primera asercion utilizando assert', () => {
        cy.get('#title').invoke('text').then(texto => {
            assert.equal(texto,"Waitss", 'El texto es diferente a &{texto}') //Mensaje de error
        });
    });

    it('Deberia validar cantidad de elementos cuyo id es title', () => {
        cy.get('#title').should('have.length', 1) //validar que haya un elemento      
    });

    it('Deberia validar cantidad de caracteres en el texto del id waits ', () => {
        cy.get('#title').invoke('text').should('have.length', 5)      
    });

    it('Primera asercion utilizando expect', () => {
        cy.get('#title').invoke('text').then(texto => {
            expect(texto).to.have.length(5)
        });
    });

    it('Validar el type en el button', () => {
        cy.get('#wait').should('have.attr', 'type', 'button')     
    });

    it('Validar el type en el button', () => {
        cy.get('#wait').invoke('attr', 'type').then(attr =>{
            expect(attr).is.equal('button')
        });    
    });

    it('Validar el type en el button', () => {
        cy.get('#wait').invoke('attr', 'class').then(attr =>{
            expect(attr).includes('chakra-button')
        });    
    });

    it.only('Validar el color del title, utilizando', () => {
        cy.get('#title').should('have.css','color', 'rgb(51, 255, 255)')     
    });

    it.only('Validar el color de title, utilizando', () => {
        cy.get('#title').invoke('css', 'color').then(color => {
            expect(color).equal('rgb(51, 255, 255)')
        });
    });

    it('Validar usando en and', () => {
        cy.get('#title').should('have.css','color', 'rgb(51, 255, 255)')
        .and('have.text', 'Waits')
        .and('have.length',1)  
        .invoke('text')
        .should('have.length', 5)
    });
});