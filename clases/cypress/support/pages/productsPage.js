export class Productspage {

    constructor() {
        this.blacktshirt = 'p[name="White Pants"]'
        this.whitePants = 'p[name="Black T-Shirt"]'
        this.primerPrecio = 'p[name="20"]'
        this.segundoPrecio = 'p[name="15"]'
        this.precioTotal = '//b[text()="35"]'
    };

    getShoppingCartProduct(producto) {
        return cy.get(`[name='~${producto}']`)
    }; 

    getShoppingCartPrecio(producto) {
        return cy.get(`[name='~${producto}']`)
    }; 

    getShoppingCartPrecioTotal(producto) {
        return cy.get(`[name='~${producto}']`)
    }; 
};