describe('Test Number 2', () => {
  
    it('should allow searching for "Silicon" in the search field', () => {
      cy.visit('https://www.fdic.gov/bank-failures/failed-bank-list');  
      cy.get('[name="combine"]').type('Silicon');
      cy.get('[value="Apply"]').click()
      cy.get('[headers="view-title-table-column"] a').should('contain.text', 'Silicon').and('have.length', 1);
    });
})