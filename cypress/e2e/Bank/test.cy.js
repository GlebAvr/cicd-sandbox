describe('Test Number 1', () => {
  
    it('should validate that only 568 banks are visible', () => {
        cy.visit('https://www.fdic.gov/bank-failures/failed-bank-list');  
        cy.get('[class="form-select usa-select"]').select('All')
        // cy.contains('- All -').click()
        cy.get('[value="Apply"]').click()
        cy.get('[headers="view-title-table-column"] a').should('have.length', 568);
      });
  });