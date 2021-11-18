describe('Counter tests', () => {
	it('Visits the counter page', () => {
		cy.visit('/').get('#count');
	});
	it('Start counter should be 0', () => {
		cy.get('#count').should('have.text', '0');
	});

	it('Increment and decrement buttons should be visible', () => {
		cy.get('#decrement').should('be.visible');
		cy.get('#decrement').should('be.visible');
	});

	it('Clicking increment button should increment value by one', () => {
		cy.get('#increment').click();
		cy.get('#count').should('have.text', '1');
	});

	it('Clicking decrement button should decrement value by one', () => {
		cy.get('#decrement').click();
		cy.get('#count').should('have.text', '0');
	});

	/* ==== Test Created with Cypress Studio ==== */
	it('set value should enter input value ', function() {
		/* ==== Generated with Cypress Studio ==== */
		cy.visit('/');
		cy.get('input').clear();
		cy.get('input').type('5');
		cy.get('#set').click();
		cy.get('#count').should('have.text', '5');
		/* ==== End Cypress Studio ==== */
	});

	/* ==== Test Created with Cypress Studio ==== */
	it('reset button should restore default value', function() {
		/* ==== Generated with Cypress Studio ==== */
		cy.visit('/');
		cy.get('input').click();
		cy.get('#increment').click();
		cy.get('#reset').click();
		cy.get('#count').should('have.text', '0');
		/* ==== End Cypress Studio ==== */
	});
});
