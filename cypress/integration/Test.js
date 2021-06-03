describe('Navengando por automationpractice', () => {
    it('Registrarme', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click();
        cy.get('#email_create').type('prueba@test150.com');
        cy.get('#SubmitCreate > span').click();
        cy.wait(5000);
        cy.get(':nth-child(3) > .top').click();
        cy.get('#customer_firstname').type('Facundo');
        cy.get('#customer_lastname').type('Nelson');
        cy.get('#passwd').type('facunel123');
        cy.get('#days').select('16');
        cy.get('#months').select('February');
        cy.get('#years').select('1999');
        cy.get('#company').type('Amazon');
        cy.get('#address1').type('1404');

        cy.get('#submitAccount > span').click();
    })

})