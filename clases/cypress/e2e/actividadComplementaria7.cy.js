/// <reference types="cypress" />
import { ToDoListPage } from "../support/pages/todolistPage";
describe('Actividad complementaria 7', () => { 
    let data;
    const toDoListPage= new ToDoListPage();
    

    before('Before', () => { 
        cy.fixture('fixture').then(datos => {
        data = datos;
        });
    });
    
    beforeEach("Actividad complementaria 7", () => {
       cy.visit('');
       cy.get("#registertoggle").dblclick()
       cy.get('#user').type('pushingit')
       cy.get('#pass').type('123456!')
       cy.get('#submitForm').click()
       cy.xpath(`//h2[starts-with(@id,'user_pushingit')]`).should('exist')
       cy.contains('To Do List').click()
   });

     it("Deberia sacar una foto completa de la pagina del login", () =>{
       cy.screenshot({capture:'fullPage'})
   });
 
   it("Deberia sacar una foto del boton todoList ", () =>{
        toDoListPage.escribirTarea(data.tareas.tarea1)
        toDoListPage.clickSendTaskButton();
        toDoListPage.escribirTarea(data.tareas.tarea2)
        toDoListPage.clickSendTaskButton();
        toDoListPage.escribirTarea(data.tareas.tarea3)
        toDoListPage.clickSendTaskButton();
        cy.get('.css-ha1fhc').screenshot()

    });
});
 