/// <reference types="cypress" />
describe ('Hooks',() => {
    let tarea1,
    tarea2,
    tarea3,
    usuario,
    contraseña

    
    before('Before', () => { // si queremos que se ejecute una vez
        cy.log('before')
        tarea1= 'Tarea 1'
        tarea2= 'Tarea 2'
        tarea3= 'Tarea 3'
        usuario= 'pushingit'
        contraseña= '123456!'

    })

    beforeEach('Before each',() => { // si queremos que se ejecute mas de una vez
        //visitar la pagina
        cy.visit('/')
        cy.get('#registertoggle').dblclick();
        cy.get('#user').type('pushingit')
        cy.get('#pass').type('123456!')
        cy.contains('Log in').click();
        cy.contains('To Do List').click();
    });

    it("Deberia ingresar al sitema y agrega una tarea", () => {
        cy.log('test 1')
        //agregar 1 tarea
        cy.get('#task').type(`${tarea1} {enter}`)

    });

    it("Deberia ingresar al sitema y agrega dos tareas", () => {
        cy.log('test 2')
        //agregar 2 tareas
        cy.get('#task').type(`${tarea1} {enter}`)
        cy.get('#task').type(`${tarea2} {enter}`)

    });

    it("Deberia ingresar al sitema y agrega tres tareas", () => {
        cy.log('test 3')
        //agregar 3 tareas
        cy.get('#task').type(`${tarea1} {enter}`)
        cy.get('#task').type(`${tarea2} {enter}`)
        cy.get('#task').type(`${tarea3} {enter}`)
    });

    afterEach('After each', () => {
        cy.log('after each')
        //enviar reportes individuales por cada test
        cy.contains('Logout').click();
    })

    after('after', () => {
        cy.log('after')
        //enviar reporte de todos los test por slack/discord
    });

});