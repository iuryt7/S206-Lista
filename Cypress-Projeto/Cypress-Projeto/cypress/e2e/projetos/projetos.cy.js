describe('Testes da funcionalidade Projetos', () => {
  beforeEach(() => {
    cy.visit('https://confianopai.com');
    cy.get(':nth-child(2) > .sc-ktwOfi').type('paulov@');
    cy.get(':nth-child(3) > .sc-ktwOfi').type('123');
    cy.get('.sc-csKJxZ').click();
  });

  it('Deve acessar a página de Projetos com sucesso', () => {
    cy.contains('Projetos').click();
    cy.url().should('include', '/projetos');
    cy.contains('Projetos').should('be.visible');
  });

  it('Deve cadastrar um projeto válido', () => {
    cy.contains('Novo Projeto').click();
    cy.get('input[name=nome]').type('Projeto Teste');
    cy.get('textarea[name=descricao]').type('Descrição do projeto.');
    cy.get('button[type=submit]').click();
    cy.contains('Projeto cadastrado com sucesso').should('be.visible');
  });

  it('Não deve cadastrar projeto com nome vazio (caso negativo)', () => {
    cy.contains('Novo Projeto').click();
    cy.get('textarea[name=descricao]').type('Sem nome.');
    cy.get('button[type=submit]').click();
    cy.contains('Nome é obrigatório').should('be.visible');
  });
});
