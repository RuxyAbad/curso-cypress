export class HeaderPage {

    constructor() {
        this.user = "[id^='user']"
    };

    retornarUsuario() {
        return cy.get(this.user)
    };  
};
    


