/// <reference types="cypress" />
const datosFixtures = require('../fixtures/fixture.json')

describe ('Hooks',() => {
    let datosFixture;

    
    before('Before', () => { 
       cy.fixture('fixture').then((data) => {
        datosFixture = data

       })
       cy.fixture('fixture').as('datosAlias')
    })

    beforeEach('Before each',() => { 
        cy.visit('/')
        cy.get('#registertoggle').dblclick();
        cy.get('#user').type(datosFixture.usuario.usuario)
        cy.get('#pass').type(datosFixture.usuario.password)
        cy.contains('Log in').click();
        cy.contains('To Do List').click();
    });

    it("Deberia ingresar al sitema y agrega una tarea", () => {
        cy.log('test 1')
        cy.get('#task').type(`${datosFixture.tareas.tarea1} {enter}`)

    });

    it("Deberia ingresar al sitema y agrega dos tareas", () => {
        cy.log('test 2')
        cy.get('#task').type(`${datosFixture.tareas.tarea1} {enter}`)
        cy.get('#task').type(`${datosFixture.tareas.tarea2} {enter}`)

    });

    it.only("Deberia ingresar al sitema y agrega tres tareas", function() {
        cy.get('#task').type(`${this.datosAlias.tareas.tarea1} {enter}`);
        cy.get('#task').type(`${this.datosAlias.tareas.tarea2} {enter}`);
        cy.get('#task').type(`${this.datosAlias.tareas.tarea3} {enter}`);
    });

});