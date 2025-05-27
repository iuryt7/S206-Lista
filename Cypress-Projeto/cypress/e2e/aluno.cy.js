describe('Cadastro de Aluno', () => {
    
 beforeEach(() => {
    cy.visit('https://confianopai.com');
    cy.get('input.cityPW').eq(0).should('be.visible').type('paulov@');
    cy.get('input.cityPW').eq(1).should('be.visible').type('123');
    cy.get('button.sc-csKJxZ').contains('Entrar').click();
    cy.url().should('include', '/adm');
  });

  it('Deve acessar a página Para criação de usuários do Aluno', () => {
    cy.contains('Criar Usuários').click();
    cy.url().should('include', '/novo-usuario');
    cy.contains('Criar Usuários').should('be.visible');
  });

  it('Preenche o formulário e cria o usuário', () => {
    cy.visit('https://confianopai.com/adm/novo-usuario');

    // Selecionar o tipo "Aluno"
    cy.get('select').select('aluno');

    // Preencher o campo Nome
    cy.get('input[type="text"]').eq(0).type('Zeca');

    // Preencher o campo Email
    cy.get('input[type="text"]').eq(1).type('zeca@email.com');

    // Preencher o campo Senha
    cy.get('input[type="password"]').type('senhaSegura123');

    // Clicar no botão Criar usuário
   cy.get('button.sc-csKJxZ.kyHxYI').click();

    // Verificar se aparece alguma mensagem de sucesso (ajuste se necessário)
    cy.contains('Usuário criado com sucesso').should('be.visible');
  });

})
