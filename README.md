# Studio Ghibli App 🎬

Este projeto é uma aplicação web que lista os filmes do Studio Ghibli, permitindo visualizar detalhes de cada obra. É um projeto desenvolvido com **React** e **TypeScript**, utilizando a [Studio Ghibli API](https://ghibliapi.vercel.app/).

## ✨ Funcionalidades

- **Listagem de Filmes**: Exibe uma lista de filmes do Studio Ghibli.
- **Detalhes do Filme**: Página dedicada para cada filme com informações detalhadas (sinopse, diretor, ano de lançamento, etc.).
- **Navegação**: Sistema de rotas dinâmicas para transitar entre a home e os detalhes.
- **Consumo de API**: Busca de dados em tempo real da API oficial do Studio Ghibli.

## 🚀 Tecnologias Utilizadas

- **React 19**: Biblioteca para construção da interface.
- **TypeScript**: Adiciona tipagem estática ao JavaScript, ajudando a evitar erros.
- **Vite**: Ferramenta de build rápida para o desenvolvimento moderno.
- **Tailwind CSS 4**: Framework de CSS para estilização rápida e moderna.
- **React Router 7**: Gerenciamento de rotas e navegação.
- **TanStack React Query 5**: Gerenciamento e cache de dados assíncronos (API).

## 🛠️ Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   ```

2. **Entre na pasta do projeto:**
   ```bash
   cd studio-ghibli-app
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acesse no navegador:**
   Abra o endereço que aparecer no terminal (geralmente `http://localhost:5173`).

## 📁 Estrutura de Pastas

- `src/components`: Componentes reutilizáveis como Header e Layout.
- `src/hooks`: Hooks personalizados para busca de dados (ex: `useFilms`).
- `src/pages`: Páginas da aplicação (Home e Detalhes).
- `src/routes`: Configuração de rotas da aplicação.
- `src/types`: Definições de tipos TypeScript para os dados da API.
- `src/styles`: Arquivos de estilização global.

---
Desenvolvido como projeto de estudo de React e consumo de APIs do curso DevQuest.
