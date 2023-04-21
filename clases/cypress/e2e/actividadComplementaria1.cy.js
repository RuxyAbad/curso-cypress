
describe("Actividad complementaria", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('Actividad complementeria 1', () =>{
        cy.visit('https://pushing-front.vercel.app/');
        //crear un test que permita registrarse en la pagina!
        //Recorda usar npx cypress open para abrir la interfaz de usuario
        //Para seleccionar el genero utiliza el siguiente selector cy.get("[value='Male']") //Female //Other
    

        cy.get('#user').type('ruxy');
        //cy.get('#user').clear();
        //cy.get('#user').type('Ruxy' +numeroRandom);
        cy.get('#pass').type('123456.',{log:false});
        cy.get("[value='Male']").check({force:true});
        cy.get('#day').select('2');
        cy.get('#month').select('October');
        cy.get('#year').select(70);
        cy.get('#submitForm').click();

    });
});

