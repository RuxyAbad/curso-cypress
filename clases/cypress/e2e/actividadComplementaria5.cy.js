describe('Actividad complementaria 5', () => { 
    const timeout = 15000;


    
    beforeEach("Prcondiciones", () => {
        cy.visit('');
        cy.get("#registertoggle").dblclick()
        cy.get('#user').type('pushingit')
        cy.get('#pass').type('123456!')
        cy.get('#submitForm').click()
        cy.get(`[id*='user_pushingit']`).should('exist')
        cy.get('#waitslink').click()
        cy.get('button#wait').dblclick()
    });

    it("Deberia validad la primera espera", () =>{
        cy.get('#wait', {timeout:timeout}).should('have.text', 'Button')
    });

    it("Deberia validad la primera espera", () =>{
        cy.get('#colorChangeMessage', {timeout:timeout}).should('have.text', 'Wait 5 more seconds')
    });

    it("Deberia validad la primera espera", () => {
       cy.get('#message',{timeout:timeout}).should('have.text', 'You have waited for ten seconds, CONGRATULATIONS')
       cy.get('#message',{timeout:timeout}).should('have.text', 'You are a man of patience and have waited fifteen seconds')
    });    
});   
        