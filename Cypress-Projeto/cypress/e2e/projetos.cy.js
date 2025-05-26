describe('Feature - Projetos', () => {
  beforeEach(() => {
    cy.visit('https://confianopai.com/');
    cy.get(':nth-child(2) > .sc-ktwOfi').type('paulov@');
    cy.get(':nth-child(3) > .sc-ktwOfi').type('123');
    cy.get('.sc-csKJxZ').click();
    cy.wait(1000);
  });

  it('Deve acessar a página de Projetos com sucesso', () => {
    cy.contains('Projetos').click();
    cy.url().should('include', '/projetos');
    cy.contains('Projetos').should('be.visible');
  });

  it('Deve cadastrar um projeto válido', () => {
  let infos = criarUsuarioOrientador();
  let infos1 = criarUsuarioAluno();
  let infos2 = ProjetoNome();
  cy.visit('https://confianopai.com/adm/add-projeto');
  cy.get('[href="/adm/add-projeto/cadastro"]').click();
  cy.get(':nth-child(1) > :nth-child(2) > .sc-hsaIUA').type(infos2[0]);
  cy.get(':nth-child(2) > :nth-child(2) > .sc-hsaIUA').type(infos1[2]);
  cy.get(':nth-child(6) > :nth-child(2) > .sc-hsaIUA').type(infos[2]);
  cy.get(':nth-child(1) > .sc-bZTyFN > .sc-hlqirL').select('Sem pendências');
  cy.get(':nth-child(2) > .sc-bZTyFN > .sc-hlqirL').select('Outro');
  cy.get('.sc-eGgGjL > :nth-child(1)').click();
  cy.contains('Equipe criada com sucesso!').should('be.visible');
  });

it('Tentativa de cadastrar um projeto inválido sem nome', () => {
  let infos = criarUsuarioOrientador();
  let infos1 = criarUsuarioAluno();
  let infos2 = ProjetoNome();
  cy.visit('https://confianopai.com/adm/add-projeto');
  cy.get('[href="/adm/add-projeto/cadastro"]').click();
  cy.get(':nth-child(2) > :nth-child(2) > .sc-hsaIUA').type(infos1[2]);
  cy.get(':nth-child(6) > :nth-child(2) > .sc-hsaIUA').type(infos[2]);
  cy.get(':nth-child(1) > .sc-bZTyFN > .sc-hlqirL').select('Sem pendências');
  cy.get(':nth-child(2) > .sc-bZTyFN > .sc-hlqirL').select('Outro');
  cy.get('.sc-eGgGjL > :nth-child(1)').click();
  cy.contains('Por favor, adicione o nome do projeto.').should('be.visible');
  });

  it('Tentativa de cadastrar um projeto inválido sem integrante', () => {
  let infos = criarUsuarioOrientador();
  let infos1 = criarUsuarioAluno();
  let infos2 = ProjetoNome();
  cy.visit('https://confianopai.com/adm/add-projeto');
  cy.get('[href="/adm/add-projeto/cadastro"]').click();
  cy.get(':nth-child(1) > :nth-child(2) > .sc-hsaIUA').type(infos2[0]);
  cy.get(':nth-child(6) > :nth-child(2) > .sc-hsaIUA').type(infos[2]);
  cy.get(':nth-child(1) > .sc-bZTyFN > .sc-hlqirL').select('Sem pendências');
  cy.get(':nth-child(2) > .sc-bZTyFN > .sc-hlqirL').select('Outro');
  cy.get('.sc-eGgGjL > :nth-child(1)').click();
  cy.contains('Por favor, adicione pelo menos um integrante.').should('be.visible');
  });


it('Tentativa de cadastrar um projeto inválido com integrante inválido', () => {
  let infos = criarUsuarioOrientador();
  let infos1 = criarUsuarioAluno();
  let infos2 = ProjetoNome();
  cy.visit('https://confianopai.com/adm/add-projeto');
  cy.get('[href="/adm/add-projeto/cadastro"]').click();
  cy.get(':nth-child(1) > :nth-child(2) > .sc-hsaIUA').type(infos2[0]);
  cy.get(':nth-child(2) > :nth-child(2) > .sc-hsaIUA').type(infos1[0]);
  cy.get(':nth-child(6) > :nth-child(2) > .sc-hsaIUA').type(infos[2]);
  cy.get(':nth-child(1) > .sc-bZTyFN > .sc-hlqirL').select('Sem pendências');
  cy.get(':nth-child(2) > .sc-bZTyFN > .sc-hlqirL').select('Outro');
  cy.get('.sc-eGgGjL > :nth-child(1)').click();
  cy.contains('Erro ao buscar o nome do membro. Verifique o email e tente novamente.').should('be.visible');
});

it('Tentativa de cadastrar um projeto inválido sem orientador', () => {
  let infos = criarUsuarioOrientador();
  let infos1 = criarUsuarioAluno();
  let infos2 = ProjetoNome();
  cy.visit('https://confianopai.com/adm/add-projeto');
  cy.get('[href="/adm/add-projeto/cadastro"]').click();
  cy.get(':nth-child(1) > :nth-child(2) > .sc-hsaIUA').type(infos2[0]);
  cy.get(':nth-child(2) > :nth-child(2) > .sc-hsaIUA').type(infos1[2]);
  cy.get(':nth-child(1) > .sc-bZTyFN > .sc-hlqirL').select('Sem pendências');
  cy.get(':nth-child(2) > .sc-bZTyFN > .sc-hlqirL').select('Outro');
  cy.get('.sc-eGgGjL > :nth-child(1)').click();
  cy.contains('Por favor, adicione um orientador.').should('be.visible'); 
});

it('Tentativa de um projeto inválido sem status', () => {
  let infos = criarUsuarioOrientador();
  let infos1 = criarUsuarioAluno();
  let infos2 = ProjetoNome();
  cy.visit('https://confianopai.com/adm/add-projeto');
  cy.get('[href="/adm/add-projeto/cadastro"]').click();
  cy.get(':nth-child(1) > :nth-child(2) > .sc-hsaIUA').type(infos2[0]);
  cy.get(':nth-child(2) > :nth-child(2) > .sc-hsaIUA').type(infos1[2]);
  cy.get(':nth-child(6) > :nth-child(2) > .sc-hsaIUA').type(infos[2]);
  cy.get(':nth-child(2) > .sc-bZTyFN > .sc-hlqirL').select('Outro');
  cy.get('.sc-eGgGjL > :nth-child(1)').click();
  cy.contains('Por favor, selecione um status.').should('be.visible');
  });

it('Tentativa de cadastrar um projeto inválido sem paralela', () => {
  let infos = criarUsuarioOrientador();
  let infos1 = criarUsuarioAluno();
  let infos2 = ProjetoNome();
  cy.visit('https://confianopai.com/adm/add-projeto');
  cy.get('[href="/adm/add-projeto/cadastro"]').click();
  cy.get(':nth-child(1) > :nth-child(2) > .sc-hsaIUA').type(infos2[0]);
  cy.get(':nth-child(2) > :nth-child(2) > .sc-hsaIUA').type(infos1[2]);
  cy.get(':nth-child(6) > :nth-child(2) > .sc-hsaIUA').type(infos[2]);
  cy.get(':nth-child(1) > .sc-bZTyFN > .sc-hlqirL').select('Sem pendências');
  cy.get('.sc-eGgGjL > :nth-child(1)').click();
  cy.contains('Por favor, selecione uma paralela.').should('be.visible');
  });

it('Tentativa de cadastrar um projeto inválido vazio', () => {
  cy.visit('https://confianopai.com/adm/add-projeto');
  cy.get('[href="/adm/add-projeto/cadastro"]').click();
  cy.get('.sc-eGgGjL > :nth-child(1)').click();
  cy.contains('Por favor, adicione o nome do projeto.').should('be.visible');
  });

  it('Deve cadastrar um projeto com um arquivo inválido', () => {
  cy.visit('https://confianopai.com/adm/add-projeto');
  cy.get('[id="fileInput"]').selectFile('cypress/fixtures/arquivo-invalido.txt', {force: true});
  cy.get('.sc-eIPYkq > :nth-child(1)').click();
  cy.contains('Erro ao criar equipe. Tente novamente.').should('be.visible');
  });

it('Procurar um projeto criado', () => {
    let infos = criarUsuarioOrientador();
  let infos1 = criarUsuarioAluno();
  let infos2 = ProjetoNome();
  cy.visit('https://confianopai.com/adm/add-projeto');
  cy.get('[href="/adm/add-projeto/cadastro"]').click();
  cy.get(':nth-child(1) > :nth-child(2) > .sc-hsaIUA').type(infos2[0]);
  cy.get(':nth-child(2) > :nth-child(2) > .sc-hsaIUA').type(infos1[2]);
  cy.get(':nth-child(6) > :nth-child(2) > .sc-hsaIUA').type(infos[2]);
  cy.get(':nth-child(1) > .sc-bZTyFN > .sc-hlqirL').select('Sem pendências');
  cy.get(':nth-child(2) > .sc-bZTyFN > .sc-hlqirL').select('Outro');
  cy.get('.sc-eGgGjL > :nth-child(1)').click();
  cy.contains('Equipe criada com sucesso!').should('be.visible');
  cy.visit('https://confianopai.com/adm/projetos');
  cy.get('.sc-ckdEwu').type(infos2[0]);
  cy.contains(infos2[0]).should('be.visible');
});

it('Adicionar um membro ao projeto depois de criado', () => {
  let infos = criarUsuarioOrientador();
  let infos1 = criarUsuarioAluno();
  let infosAluno2 = criarUsuarioAluno()
  let infos2 = ProjetoNome();
  cy.visit('https://confianopai.com/adm/add-projeto');
  cy.get('[href="/adm/add-projeto/cadastro"]').click();
  cy.get(':nth-child(1) > :nth-child(2) > .sc-hsaIUA').type(infos2[0]);
  cy.get(':nth-child(2) > :nth-child(2) > .sc-hsaIUA').type(infos1[2]);
  cy.get(':nth-child(6) > :nth-child(2) > .sc-hsaIUA').type(infos[2]);
  cy.get(':nth-child(1) > .sc-bZTyFN > .sc-hlqirL').select('Sem pendências');
  cy.get(':nth-child(2) > .sc-bZTyFN > .sc-hlqirL').select('Outro');
  cy.get('.sc-eGgGjL > :nth-child(1)').click();
  cy.contains('Equipe criada com sucesso!').should('be.visible');
  cy.visit('https://confianopai.com/adm/projetos');
  cy.get('.sc-ckdEwu').type(infos2[0]);
  cy.contains(infos2[0]).should('be.visible');
  cy.get('.sc-gjLLEI').click();
  cy.get('.sc-csKJxZ.fSmuoE').click();
  cy.get('.sc-ppzwM').type(infosAluno2[2]);
  cy.get('.iTLMzn > .sc-csKJxZ').click();
  cy.contains('Projeto atualizado com sucesso!').should('be.visible');
});

it('Trocar um membro ao projeto depois de criado', () => {
  let infos = criarUsuarioOrientador();
  let infos1 = criarUsuarioAluno();
  let infosAluno2 = criarUsuarioAluno()
  let infos2 = ProjetoNome();
  cy.visit('https://confianopai.com/adm/add-projeto');
  cy.get('[href="/adm/add-projeto/cadastro"]').click();
  cy.get(':nth-child(1) > :nth-child(2) > .sc-hsaIUA').type(infos2[0]);
  cy.get(':nth-child(2) > :nth-child(2) > .sc-hsaIUA').type(infos1[2]);
  cy.get(':nth-child(6) > :nth-child(2) > .sc-hsaIUA').type(infos[2]);
  cy.get(':nth-child(1) > .sc-bZTyFN > .sc-hlqirL').select('Sem pendências');
  cy.get(':nth-child(2) > .sc-bZTyFN > .sc-hlqirL').select('Outro');
  cy.get('.sc-eGgGjL > :nth-child(1)').click();
  cy.contains('Equipe criada com sucesso!').should('be.visible');
  cy.visit('https://confianopai.com/adm/projetos');
  cy.get('.sc-ckdEwu').type(infos2[0]);
  cy.contains(infos2[0]).should('be.visible');
  cy.get('.sc-gjLLEI').click();
  cy.get(':nth-child(2) > .sc-jiaSqj > .sc-kiTBBF').click();
  cy.get('.sc-ppzwM').clear();
  cy.get('.sc-ppzwM').type(infosAluno2[2]);
  cy.get('.iTLMzn > .sc-csKJxZ').click();
  cy.contains('Projeto atualizado com sucesso!').should('be.visible');
});

it('Trocar a posição de integrante de um membro no projeto depois de criado', () => {
  let infos = criarUsuarioOrientador();
  let infos1 = criarUsuarioAluno();
  let infosAluno2 = criarUsuarioAluno()
  let infos2 = ProjetoNome();
  cy.visit('https://confianopai.com/adm/add-projeto');
  cy.get('[href="/adm/add-projeto/cadastro"]').click();
  cy.get(':nth-child(1) > :nth-child(2) > .sc-hsaIUA').type(infos2[0]);
  cy.get(':nth-child(2) > :nth-child(2) > .sc-hsaIUA').type(infos1[2]);
  cy.get(':nth-child(6) > :nth-child(2) > .sc-hsaIUA').type(infos[2]);
  cy.get(':nth-child(1) > .sc-bZTyFN > .sc-hlqirL').select('Sem pendências');
  cy.get(':nth-child(2) > .sc-bZTyFN > .sc-hlqirL').select('Outro');
  cy.get('.sc-eGgGjL > :nth-child(1)').click();
  cy.contains('Equipe criada com sucesso!').should('be.visible');
  cy.visit('https://confianopai.com/adm/projetos');
  cy.get('.sc-ckdEwu').type(infos2[0]);
  cy.contains(infos2[0]).should('be.visible');
  cy.get('.sc-gjLLEI').click();
  cy.get(':nth-child(2) > .sc-jiaSqj > .sc-kiTBBF').click();
  cy.get('.sc-ldgOGP').select('Integrante 4');
  cy.get('.iTLMzn > .sc-csKJxZ').click();
  cy.contains('Projeto atualizado com sucesso!').should('be.visible');
});

it('Trocar o status de um projeto criado', () => {
  let infos = criarUsuarioOrientador();
  let infos1 = criarUsuarioAluno();
  let infos2 = ProjetoNome();
  cy.visit('https://confianopai.com/adm/add-projeto');
  cy.get('[href="/adm/add-projeto/cadastro"]').click();
  cy.get(':nth-child(1) > :nth-child(2) > .sc-hsaIUA').type(infos2[0]);
  cy.get(':nth-child(2) > :nth-child(2) > .sc-hsaIUA').type(infos1[2]);
  cy.get(':nth-child(6) > :nth-child(2) > .sc-hsaIUA').type(infos[2]);
  cy.get(':nth-child(1) > .sc-bZTyFN > .sc-hlqirL').select('Sem pendências');
  cy.get(':nth-child(2) > .sc-bZTyFN > .sc-hlqirL').select('Outro');
  cy.get('.sc-eGgGjL > :nth-child(1)').click();
  cy.contains('Equipe criada com sucesso!').should('be.visible');
  cy.visit('https://confianopai.com/adm/projetos');
  cy.get('.sc-ckdEwu').type(infos2[0]);
  cy.contains(infos2[0]).should('be.visible');
  cy.get('.sc-gjLLEI').click();
  cy.get('.sc-gUjWJS > .sc-kiTBBF').click();
  cy.get(':nth-child(1) > .sc-ldgOGP').select('Desclassificado');
  cy.get('.sc-hiTDLB').click();
  cy.get('.iTLMzn > .sc-csKJxZ').click();
  cy.contains('Projeto atualizado com sucesso!').should('be.visible');
});

it('Trocar a paralela de um projeto criado', () => {
  let infos = criarUsuarioOrientador();
  let infos1 = criarUsuarioAluno();
  let infos2 = ProjetoNome();
  cy.visit('https://confianopai.com/adm/add-projeto');
  cy.get('[href="/adm/add-projeto/cadastro"]').click();
  cy.get(':nth-child(1) > :nth-child(2) > .sc-hsaIUA').type(infos2[0]);
  cy.get(':nth-child(2) > :nth-child(2) > .sc-hsaIUA').type(infos1[2]);
  cy.get(':nth-child(6) > :nth-child(2) > .sc-hsaIUA').type(infos[2]);
  cy.get(':nth-child(1) > .sc-bZTyFN > .sc-hlqirL').select('Sem pendências');
  cy.get(':nth-child(2) > .sc-bZTyFN > .sc-hlqirL').select('Outro');
  cy.get('.sc-eGgGjL > :nth-child(1)').click();
  cy.contains('Equipe criada com sucesso!').should('be.visible');
  cy.visit('https://confianopai.com/adm/projetos');
  cy.get('.sc-ckdEwu').type(infos2[0]);
  cy.contains(infos2[0]).should('be.visible');
  cy.get('.sc-gjLLEI').click();
  cy.get('.sc-gUjWJS > .sc-kiTBBF').click();
  cy.get(':nth-child(2) > .sc-ldgOGP').select('Projeto teste');
  cy.get('.sc-hiTDLB').click();
  cy.get('.iTLMzn > .sc-csKJxZ').click();
  cy.contains('Projeto atualizado com sucesso!').should('be.visible');
});

  it('Remover um membro de um grupo e tentar salvar', () => {
  let infos = criarUsuarioOrientador();
  let infos1 = criarUsuarioAluno();
  let infos2 = ProjetoNome();
  cy.visit('https://confianopai.com/adm/add-projeto');
  cy.get('[href="/adm/add-projeto/cadastro"]').click();
  cy.get(':nth-child(1) > :nth-child(2) > .sc-hsaIUA').type(infos2[0]);
  cy.get(':nth-child(2) > :nth-child(2) > .sc-hsaIUA').type(infos1[2]);
  cy.get(':nth-child(6) > :nth-child(2) > .sc-hsaIUA').type(infos[2]);
  cy.get(':nth-child(1) > .sc-bZTyFN > .sc-hlqirL').select('Sem pendências');
  cy.get(':nth-child(2) > .sc-bZTyFN > .sc-hlqirL').select('Outro');
  cy.get('.sc-eGgGjL > :nth-child(1)').click();
  cy.contains('Equipe criada com sucesso!').should('be.visible');
  cy.visit('https://confianopai.com/adm/projetos');
  cy.get('.sc-ckdEwu').type(infos2[0]);
  cy.contains(infos2[0]).should('be.visible');
  cy.get('.sc-gjLLEI').click();
  cy.get(':nth-child(2) > .sc-jiaSqj > .sc-hVcFVo').click();
  cy.get('.sc-bbxCgr > :nth-child(1)').click();
  cy.contains(infos1[0]).should('not.exist');
  cy.get('.iTLMzn > .sc-csKJxZ').click();
  cy.contains('Erro ao atualizar o projeto. Por favor, tente novamente.').should('be.visible');
});

  it('Remover um orientador de um grupo e tentar salvar', () => {
  let infos = criarUsuarioOrientador();
  let infos1 = criarUsuarioAluno();
  let infos2 = ProjetoNome();
  cy.visit('https://confianopai.com/adm/add-projeto');
  cy.get('[href="/adm/add-projeto/cadastro"]').click();
  cy.get(':nth-child(1) > :nth-child(2) > .sc-hsaIUA').type(infos2[0]);
  cy.get(':nth-child(2) > :nth-child(2) > .sc-hsaIUA').type(infos1[2]);
  cy.get(':nth-child(6) > :nth-child(2) > .sc-hsaIUA').type(infos[2]);
  cy.get(':nth-child(1) > .sc-bZTyFN > .sc-hlqirL').select('Sem pendências');
  cy.get(':nth-child(2) > .sc-bZTyFN > .sc-hlqirL').select('Outro');
  cy.get('.sc-eGgGjL > :nth-child(1)').click();
  cy.contains('Equipe criada com sucesso!').should('be.visible');
  cy.visit('https://confianopai.com/adm/projetos');
  cy.get('.sc-ckdEwu').type(infos2[0]);
  cy.contains(infos2[0]).should('be.visible');
  cy.get('.sc-gjLLEI').click();
  cy.get(':nth-child(3) > .sc-jiaSqj > .sc-hVcFVo').click();
  cy.get('.sc-bbxCgr > :nth-child(1)').click();
  cy.contains(infos[0]).should('not.exist');
  cy.get('.iTLMzn > .sc-csKJxZ').click();
  cy.contains('Por favor, adicione um orientador.').should('be.visible');
});

  it('Deletar um projeto', () => {
  let infos = criarUsuarioOrientador();
  let infos1 = criarUsuarioAluno();
  let infos2 = ProjetoNome();
  cy.visit('https://confianopai.com/adm/add-projeto');
  cy.get('[href="/adm/add-projeto/cadastro"]').click();
  cy.get(':nth-child(1) > :nth-child(2) > .sc-hsaIUA').type(infos2[0]);
  cy.get(':nth-child(2) > :nth-child(2) > .sc-hsaIUA').type(infos1[2]);
  cy.get(':nth-child(6) > :nth-child(2) > .sc-hsaIUA').type(infos[2]);
  cy.get(':nth-child(1) > .sc-bZTyFN > .sc-hlqirL').select('Sem pendências');
  cy.get(':nth-child(2) > .sc-bZTyFN > .sc-hlqirL').select('Outro');
  cy.get('.sc-eGgGjL > :nth-child(1)').click();
  cy.contains('Equipe criada com sucesso!').should('be.visible');
  cy.visit('https://confianopai.com/adm/projetos');
  cy.get('.sc-ckdEwu').type(infos2[0]);
  cy.contains(infos2[0]).should('be.visible');
  cy.get('.sc-gjLLEI').click();
  cy.get('.sc-iCKXBC > [viewBox="0 0 448 512"]').click();
  cy.get('.sc-cZpZpK > :nth-child(1)').click();
  cy.get('.sc-ckdEwu').type(infos2[0]);
  cy.contains(infos2[0]).should('not.exist');
});

  it('Alterar o nome de um projeto', () => {
  let infos = criarUsuarioOrientador();
  let infos1 = criarUsuarioAluno();
  let infos2 = ProjetoNome();
  cy.visit('https://confianopai.com/adm/add-projeto');
  cy.get('[href="/adm/add-projeto/cadastro"]').click();
  cy.get(':nth-child(1) > :nth-child(2) > .sc-hsaIUA').type(infos2[0]);
  cy.get(':nth-child(2) > :nth-child(2) > .sc-hsaIUA').type(infos1[2]);
  cy.get(':nth-child(6) > :nth-child(2) > .sc-hsaIUA').type(infos[2]);
  cy.get(':nth-child(1) > .sc-bZTyFN > .sc-hlqirL').select('Sem pendências');
  cy.get(':nth-child(2) > .sc-bZTyFN > .sc-hlqirL').select('Outro');
  cy.get('.sc-eGgGjL > :nth-child(1)').click();
  cy.contains('Equipe criada com sucesso!').should('be.visible');
  cy.visit('https://confianopai.com/adm/projetos');
  cy.get('.sc-ckdEwu').type(infos2[0]);
  cy.contains(infos2[0]).should('be.visible');
  cy.get('.sc-gjLLEI').click();
  cy.get('.sc-iCKXBC > [viewBox="0 0 576 512"]').click();
  cy.get('.sc-iVheDh').clear();
  cy.get('.sc-iVheDh').type(infos2[0] + '-Alterado');
  cy.get('.sc-iCKXBC > [viewBox="0 0 448 512"]').click();
  cy.get('.iTLMzn > .sc-csKJxZ').click();
  cy.contains('Projeto atualizado com sucesso!').should('be.visible');
});

  it('Tentar alterar o nome de um projeto para vazio', () => {
  let infos = criarUsuarioOrientador();
  let infos1 = criarUsuarioAluno();
  let infos2 = ProjetoNome();
  cy.visit('https://confianopai.com/adm/add-projeto');
  cy.get('[href="/adm/add-projeto/cadastro"]').click();
  cy.get(':nth-child(1) > :nth-child(2) > .sc-hsaIUA').type(infos2[0]);
  cy.get(':nth-child(2) > :nth-child(2) > .sc-hsaIUA').type(infos1[2]);
  cy.get(':nth-child(6) > :nth-child(2) > .sc-hsaIUA').type(infos[2]);
  cy.get(':nth-child(1) > .sc-bZTyFN > .sc-hlqirL').select('Sem pendências');
  cy.get(':nth-child(2) > .sc-bZTyFN > .sc-hlqirL').select('Outro');
  cy.get('.sc-eGgGjL > :nth-child(1)').click();
  cy.contains('Equipe criada com sucesso!').should('be.visible');
  cy.visit('https://confianopai.com/adm/projetos');
  cy.get('.sc-ckdEwu').type(infos2[0]);
  cy.contains(infos2[0]).should('be.visible');
  cy.get('.sc-gjLLEI').click();
  cy.get('.sc-iCKXBC > [viewBox="0 0 576 512"]').click();
  cy.get('.sc-iVheDh').clear();
  cy.get('.sc-iCKXBC > [viewBox="0 0 448 512"]').click();
  cy.contains('O nome do projeto não pode estar vazio.').should('be.visible');
});


});




function criarUsuarioAluno() {
  let randomNumber = getRandomIntInclusive(1, 100);
  let hora = new Date().getHours().toString();
    let minutos = new Date().getMinutes().toString();
    let segundos = new Date().getSeconds().toString();
    let ID1 = hora + minutos + segundos + randomNumber + 'Teste-aluno';
    let senha1 = hora + minutos + segundos + randomNumber + 'Teste-aluno';
    let email1 = hora + minutos + segundos + randomNumber + 'Aluno@inatel.br';
    let infos1 = [ ID1, senha1, email1 ];

    cy.visit('https://confianopai.com/adm/novo-usuario');
    cy.get('.sc-dsAqUS.hBFaUw').select('Aluno');
    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(ID1);
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(email1);
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(senha1);
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click();
    cy.contains('Usuário criado com sucesso!').should('be.visible');
    return infos1;
}

function criarUsuarioOrientador() {
  let hora = new Date().getHours().toString();
  let randomNumber = getRandomIntInclusive(1, 9);
    let minutos = new Date().getMinutes().toString();
    let segundos = new Date().getSeconds().toString();
    let ID = hora + minutos + segundos + randomNumber + 'Teste-Orientador';
    let senha = hora + minutos + segundos + randomNumber + 'Teste-Orientador';
    let email = hora + minutos + segundos + randomNumber + 'Orientador@inatel.br';
    let infos = [ ID, senha, email ];

    cy.visit('https://confianopai.com/adm/novo-usuario');
    cy.get('.sc-dsAqUS.hBFaUw').select('Orientador');
    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(ID);
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(email);
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(senha);
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click();
    cy.contains('Usuário criado com sucesso!').should('be.visible');

    return infos;
}

function ProjetoNome() {
  let hora = new Date().getHours().toString();
    let minutos = new Date().getMinutes().toString();
    let segundos = new Date().getSeconds().toString();
    let nome = hora + minutos + segundos + 'Projeto Teste';
    let infos2 = [ nome ];
    return infos2;
  }

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}