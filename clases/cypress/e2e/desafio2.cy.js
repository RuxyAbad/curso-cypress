/// <reference types="cypress" />

describe('Desafio2', () => {
    let datosDesafio2;

    before(() => { 
        cy.fixture('desafio2').then(datos => {
        datosDesafio2 = datos
        })

    });

    beforeEach(() => { 
        cy.visit('/')
        cy.get('#registertoggle').dblclick();
        cy.get('#user').type(datosDesafio2.usuario.usuario)
        cy.get('#pass').type(datosDesafio2.usuario.password)
        cy.contains('Log in').click();
        cy.contains('To Do List').click();  
    });

    it("Deberia ingresar al sitema y agrega cinco tarea", () => {
        cy.get('#task').type(`${datosDesafio2.tareas.tarea1} {enter}`)
        cy.get('#task').type(`${datosDesafio2.tareas.tarea2} {enter}`)
        cy.get('#task').type(`${datosDesafio2.tareas.tarea3} {enter}`)
        cy.get('#task').type(`${datosDesafio2.tareas.tarea4} {enter}`)
        cy.get('#task').type(`${datosDesafio2.tareas.tarea5} {enter}`)   
    });

    it("Deberia verificar que existan los botones, All, Completed, Active y Remove all", () => {
        cy.xpath('//button[@id="all"]').should('exist')
        cy.get('#completed').should('exist')
        cy.xpath('//button[text()="Active"]').should('exist')
        cy.xpath('//button[contains(@id,"removeAll")]').should('exist')
    });
    
    it("Agrega 2 tareas, completarlas y eliminar la segunda tarea completada", () => {
        cy.get('#task').type(`${datosDesafio2.tareas.tarea1} {enter}`)
        cy.get('#task').type(`${datosDesafio2.tareas.tarea2} {enter}`)
        cy.contains('p','Tarea 1').click();
        cy.contains('p','Tarea 2').click();
        cy.contains('p','Tarea 2').parent().find('button').click();   
    });

    it("Agregar 2 tareas y elimina la primera", () => {
        cy.get('#task').type(`${datosDesafio2.tareas.tarea1} {enter}`)
        cy.get('#task').type(`${datosDesafio2.tareas.tarea2} {enter}`)
        cy.contains('p','Tarea 1').parent().find('button').click();
    });

});