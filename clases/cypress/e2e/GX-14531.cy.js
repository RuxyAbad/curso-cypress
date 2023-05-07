/// <reference types="cypress" />
import { HomePageGX } from "../support/pages/homePageGX";
import { ProductsPageGX } from "../support/pages/productsPageGX";
import { ShoppingCartPageGX } from "../support/pages/shoppingCartPageGX";
import { CheckoutPage } from "../support/pages/checkoutPage";


describe('GX-14531', () =>{
    const homePageGX = new HomePageGX
    const productsPageGX = new ProductsPageGX
    const shoppingCartPageGX = new ShoppingCartPageGX
    const checkoutPage = new CheckoutPage

    let data
    before(() =>{
        cy.fixture('GX-14531').then(datosFixture => {
            data = datosFixture;
        });
    });

    it('Deberia validar el mensaje de error al ingresar menos de 16 caracteres en la tarjeta de credito', () => {
        cy.logIn(Cypress.env('usuario'), Cypress.env('contraseña'))
        cy.visit('');
        cy.get(homePageGX.onlineShopLink).click();
        productsPageGX.agregarProducto(data.productos.nombre);
        cy.get(productsPageGX.goShoppingCartButton).click();
        cy.contains(shoppingCartPageGX.goCheckoutButton).click();
        cy.get(checkoutPage.nombre).type(data.checkout.nombre);
        cy.get(checkoutPage.apellido).type(data.checkout.apellido);
        cy.get(checkoutPage.tarjeta).type(data.checkout.tarjeta);
        cy.contains(checkoutPage.purchaseButton).click();
        cy.get(checkoutPage.errorMessage).should('have.text','Card number must have 16 characters');
    }); 
});