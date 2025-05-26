describe('Projetos do Orientador', () => {
  beforeEach(() => {
    cy.visit('https://confianopai.com');
    cy.get('input.cityPW').eq(0).should('be.visible').type('Porto@gmail.com');
    cy.get('input.cityPW').eq(1).should('be.visible').type('123');
    cy.get('button.sc-csKJxZ').contains('Entrar').click();
    cy.url().should('include', '/orientador');
  });

  it('Deve exibir a seção de Projetos', () => {
    cy.contains('Projetos').should('exist');
  });

  it('Deve listar os projetos orientados', () => {
    cy.get('.sc-bZHSRq').should('have.length.greaterThan', 0);
  });

  it('Deve exibir nome do aluno e status no projeto', () => {
    cy.get('.sc-bZHSRq').first().within(() => {
      cy.contains('Paulo porto').should('exist');
      cy.contains('Status:').should('exist');
    });
  });

  it('Deve navegar para detalhes do projeto ao clicar', () => {
    cy.get('a[href^="/orientador/projetos/"]').first().click();
    cy.url().should('include', '/orientador/projetos/');
  });

  it('Teste negativo: buscar projeto inexistente deve retornar 0 projetos', () => {
    cy.get('input[placeholder="Procurar Projeto..."]').type('Projeto Inexistente');
    cy.get('.sc-bZHSRq').should('have.length', 0);
  });

  it('Deve exibir botão de logout após login', () => {
    cy.contains('Logout').should('be.visible');
  });

  it('Deve filtrar projetos pelo nome corretamente', () => {
    cy.get('input[placeholder="Procurar Projeto..."]').type('Testes106');
    cy.get('.sc-bZHSRq').should('contain.text', 'Testes106');
  });

  it('Deve retornar 0 projetos se o filtro não encontrar resultados', () => {
    cy.get('input[placeholder="Procurar Projeto..."]').clear().type('InexistenteXYZ');
    cy.get('.sc-bZHSRq').should('have.length', 0);
  });

  it('Campo de busca deve estar visível e vazio ao carregar a página', () => {
    cy.get('input[placeholder="Procurar Projeto..."]').should('be.visible').and('have.value', '');
  });

});
