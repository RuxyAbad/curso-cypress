export class ProductsPageGX {
    constructor (){
        this.closeModal = '#closeModal'
        this.goShoppingCartButton = '#goShoppingCart'

    };

    agregarProducto(producto) {
        cy.get(`[value='${producto}']`).click();
        cy.get(this.closeModal).click();
    }
}