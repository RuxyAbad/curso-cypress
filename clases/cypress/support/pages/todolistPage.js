export class ToDoListPage {
    construtor() {
        this.taskInput = '#task';
        this.sendTaskButton = '#sendTask';
        this.validarAll = '#all';
        this.validarCompleted = '#completed';
        this.validarActive = '#active';
        this.validarRemoveAll = '#removeAll';
    };

    escribirTarea(tarea) {
        cy.get('#task').type(tarea)
    };
    

    clickSendTaskButton() {
        cy.get('#sendTask').click();
    };

    completarTarea(tarea) {
        cy.contains(tarea).click();
    };

    validarAll() {
        cy.get(this.validarAll).should('exist');
    };  

    validarCompleted() {
        cy.get(this.validarCompleted).should('exist');
    };

    validarActive() {
        cy.get(this.validarActive).should('exist'); 
    };

    validarRemoveAll() {
        cy.get(this.validarRemoveAll).should('exist');
    };
};