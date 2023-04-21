describe('Xpath', () => {

    it('validando elementos con xpath absolutos', () => {
        cy.visit('');
        cy.xpath('/html/body/div[1]/div/div/div/form/div[1]/input');

    })

    it('validando elementos con xpath relativos', () => {
        cy.visit('');
        cy.xpath("//input[@id='user']");

    })
    
    it('validando elementos con xpath contains', () => {
        cy.visit('');
        cy.xpath('//button[contains(@type,"sub")]');

    })

    it('validando elementos con xpath text', () => {
        cy.visit('');
        cy.xpath('//button[text()="Register"]');

    })

    it('validando elementos con xpath and ', () => {
        cy.visit('');
        cy.xpath('//input[@id="user" and "@name=name"]');

    })   

    it('validando elementos con xpath or ', () => {
        cy.visit('');
        cy.xpath('//input[@id="user" or "@name=name"]');

    }) 

    it('validando elementos con el operador logico not ', () => {
        cy.visit('');
        cy.xpath('//input[@id="user" and not (@name="users")]')

    }) 

    it('validando elementos con el operador logico starts-with ', () => {
        cy.visit('');
        cy.xpath('//input[starts-with(@value,"Male")]')

    }) 

    it('combinando el metodo start-with con el metodo text  ', () => {
        cy.visit('');
    cy.xpath('//span[starts-with(text(),"Iniciá")]')

    }) 

    it('Encontrar elementos utilizando parent', () => {
        cy.visit('')
        cy.xpath('//input[@id="user"]//parent::div')
    })

    it('Encontrar elementos utilizando child', () => {
        cy.visit('')
        cy.xpath('//div//child::input[@id="user"]')

    })

    it('Encontrar elementos utilizando preceding-sibling', () => {
        cy.visit('')
        cy.xpath('//input[@id="user"]//preceding-sibling::label')

    })

    it('Encontrar elementos utilizando following-sibling', () => {
        cy.visit('')
        cy.xpath('//label[@for="user"]//following-sibling::input')


    })


});