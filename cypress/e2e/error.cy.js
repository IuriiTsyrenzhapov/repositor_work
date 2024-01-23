describe('Facebook Messaging', () => {
  beforeEach(() => {
    cy.visit('https://www.facebook.com');
  });

  it('Should not log in with invalid credentials', () => {
    cy.fixture('testdata.json').then((data) => {
      cy.get('#email').type(data.invalidUser.username);
      cy.get('#pass').type(data.invalidUser.password);
      cy.get('#loginbutton').click();
    });
  });
});
