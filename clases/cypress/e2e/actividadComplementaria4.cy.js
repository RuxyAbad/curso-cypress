
//username (el username debe ser inexistente)
//pasword (la password debe ser valida) //123456!
//mensajeError (el mensaje de error lo tienes que copiar de la pagina ) //Credentials were not found

//usa before para acceder al fixture y obtener los datos
//beforeEach para visitar la pagina y dirigirse al login

/// <reference types="cypress" />

describe('Actividad complementaria 4', () => {
    let datosActividadComplementaria4;

    before(() => { 
        cy.fixture('actividadComplementaria4').then(datos => {
        datosActividadComplementaria4 = datos
        })
    })

    beforeEach(() => { 
        cy.visit('/')
        cy.get('#registertoggle').dblclick();
        
    })

    it('Deberia validar un mensaje de error al colocar un usuario inexistente', () => {
        cy.get('#user').type(datosActividadComplementaria4.usuario);
        cy.get('#pass').type(datosActividadComplementaria4.usuario); 
        cy.get('#submitForm').click();
        //cy.get('#errorMessage').should('have.text', datosActividadComplementaria4.mensajeError);
    
    });

});