
	// instalar la dependencia cypress-xpath
  // remplazar todos los selectores 'cssSelectors' por expresiones xpath
  // recorda usar el metodo cy.xpath y agregar la dependencia en el archivo e2e.
    it('Actividad complementaria 3', () =>{
        cy.visit('');
        cy.xpath('//span[@id="registertoggle"]').dblclick()
        cy.xpath('//input[@id="user"]').type(`pushingit`);
        cy.xpath('//input[@name="pass"]').type('123456!');
        cy.xpath('//button[contains(@type,"submit")]').click()
        cy.xpath('//a[@id="todolistlink"]').click()
        cy.xpath('//input[starts-with(@type,"text")]').type("tarea 1")
        cy.xpath('//button[@class="chakra-button css-1xp5r05"]').click()
        cy.xpath('//p[@class="chakra-text css-8atqhb"]').click()
    });