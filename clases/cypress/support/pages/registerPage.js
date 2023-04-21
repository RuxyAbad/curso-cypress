export class RegisterPage {
    constructor(){
        this.iniciarSesionSpan = '#registertoggle';
        this.usuarioInput = '#user';
    };

    clickIniciarSesion(){
        cy.get(this.iniciarSesionSpan).dblclick();
    };

    escribirUsuario(usuario){
        cy.get(this.usuarioInput).type(usuario);
    };

    checkGenero(genero){
        cy.get(`[value=${genero}]`).check();
    };
};