describe("desafio 1", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('desafio 1', () =>{
        cy.visit('');
        cy.get('[cy-get="user"]').type(`pushingit${numero}`); 
        cy.get('#user').clear()
        cy.get('#user').type(`pushingit${numero}`);
        cy.get('[name="pass"]').type('12678$');
        cy.get('[value=Female]').check({force:true});
        cy.get('#day').select('2');
        cy.get('[name="month"]').type('octubre');
        cy.get('#year').select(20);
        cy.contains('button', 'Register').click();
        cy.get('#todolistlink').click();
        cy.get('[name="task"]').type('tarea1');
        cy.get('[type="submit"]').click();
        cy.get('[class="chakra-text css-8atqhb"]').parent('div').click();









    })

});