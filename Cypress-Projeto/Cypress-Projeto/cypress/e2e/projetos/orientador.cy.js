describe('Testes da página de Orientador - confianopai.com', () => {
  beforeEach(() => {
    cy.visit('https://confianopai.com');
    cy.get(':nth-child(2) > .sc-ktwOfi').type('paulov@3');
    cy.get(':nth-child(3) > .sc-ktwOfi').type('123');
    cy.get('.sc-csKJxZ').click();
  });
  it('Deve exibir informações do orientador', () => {
    cy.contains('Orientador').should('exist')
    cy.get('.orientador-info').should('exist')
  })

  it('Deve listar os projetos orientados', () => {
    cy.contains('Projetos Orientados').should('exist')
    cy.get('.project-card').should('have.length.at.least', 1)
  })

  it('Deve exibir alunos orientados', () => {
    cy.contains('Alunos Orientados').should('exist')
    cy.get('.student-card').should('have.length.at.least', 1)
  })

  it('Deve filtrar projetos orientados por categoria', () => {
    cy.get('select').select('Engenharia')
    cy.get('.project-card').each(($el) => {
      cy.wrap($el).contains('Engenharia')
    })
  })

  it('Deve navegar para detalhes de um projeto orientado', () => {
    cy.get('.project-card').first().click()
    cy.url().should('include', '/projeto/')
  })

  it('Teste negativo: selecionar categoria inválida retorna 0 projetos', () => {
    cy.get('select').select('---')
    cy.get('.project-card').should('have.length', 0)
  })
})
