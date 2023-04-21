export class HomePage {
    constructor(){
        this.toDoListLink = 'To Do List'
    };

    clicktodoList() {
        cy.contains(this.toDoListLink).click(); 
    }; 
};