describe('A11y tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.injectAxe();
  });

  it('loads the map container', () => {
    cy.get('.map');
  });

  it('Has no detectable a11y violations', () => {
    cy.checkA11y();
  });
});
