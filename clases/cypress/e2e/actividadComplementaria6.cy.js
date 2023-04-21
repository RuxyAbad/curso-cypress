//importar la pagina loginPage
import { LoginPage } from "../support/pages/loginPage";
import { ToDoListPage } from "../support/pages/todolistPage";

describe('Actividad complementaria 6', () => {
    let data;
    const loginPage = new LoginPage();
    const toDoListPage= new ToDoListPage();
    

    before('Before', () => { 
        cy.fixture('fixture').then(datos => {
        data = datos;
        });
    });
        
        beforeEach("Actividad complementaria 5", () => {
            cy.visit('');
            cy.get("#registertoggle").dblclick();
            loginPage.escribirUsuario(data.usuario.usuario); // utilizar la clase loginPage para ingresar el usuario
            loginPage.escribirContraseña(data.usuario.password); // utilizar la clase loginPage para ingresar  la contraseña
            loginPage.clickLogIn(); // utilizar la clase loginPage hacer click en 'Log in'
            cy.xpath(`//h2[starts-with(@id,'user_pushingit')]`).should('exist');
            cy.get('#todolistlink').click();
        });
    
        it("deberia verificar que los botones existen", () => {
            cy.get(toDoListPage.validarAll).should('exist');
            cy.get(toDoListPage.validarCompleted).should('exist');
            cy.get(toDoListPage.validarRemoveAll).should('exist');
            cy.get(toDoListPage.validarRemoveAll).should('exist');
           
        });
     });