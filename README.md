# DevProfile

Este repositório contém o código-fonte de uma Aplicação de Página Única (SPA) desenvolvida para apresentar o perfil de um desenvolvedor.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **Vite**: Ferramenta de build e desenvolvimento rápida para projetos front-end modernos.
- **Firebase**: Plataforma de desenvolvimento de aplicativos que fornece serviços como hospedagem e autenticação.

## Estrutura do Projeto

- **public/**: Contém arquivos estáticos e o `index.html` principal.
- **src/**: Inclui o código-fonte principal da aplicação React.
- **.github/workflows/**: Configurações para integração contínua e deploy automatizado.

## Rotas da Aplicação

A aplicação é uma SPA (Single Page Application), utilizando React Router para gerenciar as rotas:

- `/` - **Home**: Apresentação do desenvolvedor, suas habilidades e experiência.
- `/projects` - **Projetos**: Lista de projetos desenvolvidos, com descrições e links para repositórios.
- `/contact` - **Contato**: Formulário e informações de contato para conexões profissionais.

## Configuração e Execução

1. **Instalação das Dependências**:

   ```bash
   npm install
   ```

2. **Execução do Ambiente de Desenvolvimento**:

   ```bash
   npm run dev
   ```

   O servidor de desenvolvimento será iniciado e a aplicação estará acessível em `http://localhost:3000`.

3. **Build para Produção**:

   ```bash
   npm run build
   ```

   Os arquivos otimizados para produção serão gerados no diretório `dist/`.

## Deploy

A aplicação está configurada para ser implantada no Firebase Hosting. Para realizar o deploy:

1. **Login no Firebase**:

   ```bash
   firebase login
   ```

2. **Inicialização do Projeto Firebase**:

   ```bash
   firebase init
   ```

   Siga as instruções para configurar o projeto, selecionando "Hosting" e vinculando ao projeto correto no Firebase.

3. **Deploy para o Firebase**:

   ```bash
   firebase deploy
   ```

   A aplicação será implantada e estará disponível no domínio fornecido pelo Firebase.

## Considerações Finais

Este projeto serve como uma excelente base para desenvolvedores que desejam criar uma apresentação online de seu perfil profissional. Ao utilizar tecnologias modernas como React, TypeScript e Vite, juntamente com a hospedagem no Firebase, garante-se uma aplicação rápida, tipada e facilmente implantável.

Para contribuições ou sugestões, sinta-se à vontade para abrir uma issue ou enviar um pull request.
