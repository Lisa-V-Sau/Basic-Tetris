describe('Basic tetris tests', () => {

  // Need to clear after each action otherwise will rise endless game loop
  // Need to design a specific game that we know for sure will pull each time
  // Need to include tags for specific test runs
  
  it('Navigates to the site', () => {
    cy.visit('http://127.0.0.1:5500/app/index.html')
  })
  it('Clicks start and plays clears one line', () => {
    cy.get('[data-cy="start-btn"]').click()
  })
})