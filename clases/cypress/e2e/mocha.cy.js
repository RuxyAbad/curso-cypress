describe('mocha', () => { 
    const curso = 'pushingit'
       
    it('Nuestro primer test con mocha', () => {
        cy.log('Nuestro primer test');
    });
    it.skip('Nuestro segundo test con mocha', () => {
        cy.log('Nuestro segundo test');

    });
    it.only('Nuestro tercer test con mocha', () => {
        cy.log('Nuestro tercer test');
    });
});