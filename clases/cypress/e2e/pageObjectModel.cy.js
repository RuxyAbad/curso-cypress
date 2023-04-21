/// <reference types="cypress" />
import { LoginPage} from "../support/pages/loginPage";
import { RegisterPage} from "../support/pages/registerPage";
import { HomePage} from "../support/pages/homePage";
import { HeaderPage } from "../support/pages/headerPage";
import { ToDoListPage } from "../support/pages/todolistPage";

describe('Pages object model', () => {
    let data;
    const loginPage = new LoginPage();
    const registerPage = new RegisterPage();
    const homePage = new HomePage();
    const headerPage = new HeaderPage();
    const toDoListPage = new ToDoListPage();

    before('Before', () => { 
        cy.fixture('fixture').then(datos => {
        data = datos;
        });
    });

    beforeEach('', () => { 
        cy.visit('/')
        registerPage.clickIniciarSesion();
        loginPage.escribirUsuario(data.usuario.usuario);
        loginPage.escribirContraseña(data.usuario.password);
        loginPage.clickLogIn();
        cy.get(headerPage.user).should('exist') //retorna string y utilizamos cy.get para obtenr el elemento
        headerPage.retornarUsuario().should('exist') //retorna el elemento web y directamente hacemos la asercion
        homePage.clicktodoList();
    });

    it("Complete una tarea", () => {
        toDoListPage.escribirTarea(data.tareas.tarea1);
        toDoListPage.clickSendTaskButton();
        toDoListPage.completarTarea(data.tareas.tarea1);
    });

    it("Complete dos tarea", () => {
        toDoListPage.escribirTarea(data.tareas.tarea1);
        toDoListPage.clickSendTaskButton();
        toDoListPage.escribirTarea(data.tareas.tarea2);
        toDoListPage.clickSendTaskButton();
        toDoListPage.escribirTarea(data.tareas.tarea3);
        toDoListPage.clickSendTaskButton();
        toDoListPage.completarTarea(data.tareas.tarea1);
        toDoListPage.completarTarea(data.tareas.tarea3);


    });
});
