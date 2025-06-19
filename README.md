# Testes Automatizados com Cypress - S206

Este repositório contém a implementação de testes automatizados para o site [confianopai.com](https://confianopai.com) utilizando Cypress.

## Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/seurepo.git
   cd seurepo
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute os testes com:
   ```bash
   npm test
   ```

4. Para gerar relatório:
   ```bash
   npm run report
   ```

5. O relatório estará em: `cypress/reports`

## Estrutura de Suítes
- `Projetos`
- `Alunos`
- `Orientador`

Cada suíte contém no mínimo 6 testes, incluindo pelo menos 1 caso negativo.

# Testes Automatizados de API com Postman - S206

Este repositório contém a implementação de testes automatizados para a API do site [confianopai.com](https://confianopai.com) utilizando POSTMAN.

## Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/seurepo.git
   cd seurepo
   ```

2. Instalar o newman para report:

   ```bash
   npm install -g newman
   ```
   
   ```bash
   npm install -g newman-reporter-htmlextra
   ```

4. Execute os testes com:
   ```bash
   npm test
   ```

5. Para gerar relatório:
   ```bash
   newman run lista_postman.postman_collection.json -e confianopai.postman_environment.json -r htmlextra
   ```

6. O relatório estará em: `/newman`

## Estrutura de Suítes
- `Projetos`
- `Alunos`
- `Orientador`

Cada suíte contém no mínimo 6 testes, incluindo pelo menos 1 caso negativo.

## Autores
- Paulo Vicente de Carvalho Porto
- Vitória de Moraes Dutra
- Iury Teixeira de Souza
- Roger Pereira Freitas
- 
