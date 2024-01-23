describe('Facebook Messaging', () => {
  beforeEach(() => {
    cy.visit('https://www.facebook.com');
  });

  it('Should log in with valid credentials', () => {
    cy.fixture('testdata.json').then((data) => {
      cy.get('#email').type(data.validUser.username);
      cy.get('#pass').type(data.validUser.password);
      cy.get('#loginbutton').click();
    });
  });

  it('Should send a message with valid credentials', () => {
    cy.fixture('testdata.json').then((data) => {
      // Perform login
      cy.get('#email').type(data.validUser.username);
      cy.get('#pass').type(data.validUser.password);
      cy.get('#loginbutton').click();

      // Send message
      cy.get('[data-testid="chat_sidebar"]').click();
      cy.get('[data-testid="NewMessage"]').click();
      cy.get('[data-testid="search_input"]').type('Igor Dzyubich');
      cy.get('[data-testid="result_0"]').click();
      cy.get('[data-testid="composer_input"]').type(data.validUser.message);
      cy.get('[data-testid="send"]').click();
    });
  });
});
