/// <reference types="cypress" />
import { LoginPage } from "../support/pages/loginPage";
import { Productspage } from "../support/pages/productsPage";
import { RegisterPage } from "../support/pages/registerPage";


describe('preEntrega', () => {
    let data;
    const loginPage = new LoginPage();
    const productsPage = new Productspage();

    before(() => { 
        cy.fixture('fixture').then(datos => {
        data = datos
        })

    });

    beforeEach(() => { 
        cy.visit('/')
        RegisterPage.clickIniciarSesion();
        loginPage.escribirUsuario(data.usuario.usuario);
        loginPage.escribirContraseña(data.usuario.password);
        loginPage.clickLogIn();
        //loginPag.clickOnlineShop();
        //loginPag.clickBlackTShirt();
        //loginPag.clickButtonCerrar();
        //loginPag.clickWhitePants();
        //loginPag.clickCerrar();
        //loginPag.clickButtonShoppingCart();

    //it("Verifica el precio de dos productos", () => {
        //productsPage.getShoppingCartProduct(products).should('have.text', fixtures.products.primerProducto.nombre)
        //productsPage.getShoppingCartProduct(products).should('have.text', fixtures.products.primerProducto.precio)
        //productsPage.getShoppingCartProduct(products).should('have.text', fixtures.products.segundoProducto.nombre)
        //productsPage.getShoppingCartProduct(products).should('have.text', fixtures.products.segundoProducto.precio)
        //preEntregaPage.clickButtonShowtotalPrice()
        //productsPage.getShoppingCartPrecioTotal(products).should('have.text', fixture.products.precioTotal.precioTotal)

    });
});       
