export class LoginPag{

    constructor() {
        this.iniciarSesionSpan = '#registertoggle';
        this.usuarioInput = '#user'; 
        this.contraseñaInput = '#pass'; 
        this.loginButton = 'Log in';
        this.onlineShop = '//a[@id="onlineshoplink"]//parent::p';
        this.blackTShirt = '#blacktshirt';
        this.whitepants = '#whitepants';
        this.buttonCerrar = '//div//child::button[@id="closeModal"]';
        this.Cerrar= '//div//child::button[@id="closeModal"]';
        this.buttonShoppingCart = '//button[contains(@class,"chakra-button css-17aoa8p")]';
        this.clickButtonShowtotalPrice = '//button[text()="Show total price"]'
    };

    clickIniciarSesion(){
        cy.get(this.iniciarSesionSpan).dblclick();
    };

    escribirUsuario(usuario) {
        cy.get(this.usuarioInput).type(usuario);
    };

    escribirContraseña(contraseña) {
        cy.get(this.contraseñaInput).type(contraseña);
    };

    clickLogIn() {
        cy.contains(this.loginButton).click();
    };

    clickOnlineShop () {
        cy.xpath(this.onlineShop).click();
    };

    clickBlackTShirt() {
        cy.get(this.blackTShirt).click();
    }
    clickWhitePants() {
        cy.get(this.whitepants).click();
    };

    clickButtonCerrar() {
        cy.xpath(this.buttonCerrar).click();
    };
    clickCerrar() {
        cy.xpath(this.Cerrar).click();
    };
    clickButtonShoppingCart(){
        cy.xpath(this.buttonShoppingCart).click();
    };

    clickButtonShowtotalPrice(){
        Cypress.xpath(this.clickButtonShowtotalPrice).click();
    };
};
