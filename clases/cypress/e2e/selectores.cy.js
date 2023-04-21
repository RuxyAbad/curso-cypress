describe('selectores',()=> { 

    xit('Deberia encontrar los elementos utilizados diferentes tecnicas', () =>{
        cy.visit('');
        cy.get('button') //tagname
        cy.get('input') //tagname
        cy.get('[cy-get="user"]') //atributos
        cy.get('[for="day"]') //atributos
        cy.get('#user') //ID
        cy.get('input#user') //tagname + id
        cy.get('input[name="user"]') //atributos +id
        cy.get('.password') // clase
        cy.get('[class="chakra-input password css-1ekf6i8"]') // clase + atributo

    
    })

    it('Encontrar elementos con el metodo find', () => {
        cy.visit('')
        cy.get('form').find('button')
    });

    it('Encontrar elementos con el metodo contains', () => {
        cy.visit('')
        cy.contains('button', 'Register')
        cy.contains('button', 'register', {matchCase: false})
    });

    it('Encontrar elementos con el metodo parent', () => {
        cy.visit('')
        cy.get('#user').parent('div')
    });

    it('Encontrar elementos con el metodo children', () => {
        cy.visit('')
        cy.get('form > div').first().children('#user')
    });

    it('Encontrar elementos con el metodo sibblings', () => {
        cy.visit('')
        


    });
});