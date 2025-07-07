# 📰 The Coding Journal

Um portfólio pessoal com visual de jornal tabloide, desenvolvido em React + Tailwind CSS.

## 🎨 Conceito

Inspirado no design clássico de jornais impressos, este portfólio apresenta projetos e informações profissionais em um formato editorial único, com:

-   **Visual de jornal tabloide** com tipografia de impacto
-   **Manchetes chamativas** para destacar projetos
-   **Layout em colunas** responsivo
-   **Integração com GitHub API** para listagem automática de repositórios
-   **Animações suaves** entre seções

## 🚀 Tecnologias

-   **React 19** - Framework principal
-   **Tailwind CSS** - Estilização e responsividade
-   **Vite** - Build tool e desenvolvimento
-   **GitHub API** - Listagem automática de repositórios
-   **Framer Motion** - Animações (opcional)

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.jsx          # Cabeçalho estilo jornal
│   ├── ProjectBox.jsx      # Cards de projeto estilo manchete
│   └── Footer.jsx          # Rodapé com links
├── pages/
│   └── Home.jsx            # Página principal
├── services/
│   └── github.js           # Integração com GitHub API
└── assets/
```

## 🎯 Funcionalidades

### 📈 Projetos em Destaque

-   Listagem automática via GitHub API
-   Destaque para projetos com mais estrelas
-   Cards estilo "manchete de jornal"
-   Links diretos para código e demo

### 👤 Seção "Entrevista"

-   Informações pessoais estilo editorial
-   Estatísticas do GitHub
-   Stack tecnológica
-   Links para redes sociais

### 📚 Arquivo de Projetos

-   Grid de todos os repositórios
-   Filtros por linguagem
-   Ordenação por data/estrelas

## 🛠️ Como Executar

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/carlosecosmesilva/carlosecosmesilva.github.io.git
    cd carlosecosmesilva.github.io
    ```

2. **Instale as dependências:**

    ```bash
    npm install
    ```

3. **Execute em modo desenvolvimento:**

    ```bash
    npm run dev
    ```

4. **Build para produção:**
    ```bash
    npm run build
    ```

## ⚙️ Configuração

### GitHub API

No arquivo `src/services/github.js`, altere a constante `USERNAME` para seu usuário do GitHub:

```javascript
const USERNAME = "seu-usuario-github";
```

### Personalização

-   **Cores:** Edite as cores customizadas em `tailwind.config.js`
-   **Fontes:** Modificar as fontes em `src/index.css`
-   **Conteúdo:** Atualizar informações pessoais em `src/pages/Home.jsx`

## 🎨 Paleta de Cores

-   **Fundo do jornal:** `#f8f6f0` (newspaper-bg)
-   **Bordas:** `#2a2a2a` (newspaper-border)
-   **Manchetes:** `#c41e3a` (headline-red)

## 📝 Seções

### 🚨 Breaking News

Projeto em destaque com layout de manchete principal

### 🎤 Entrevista Exclusiva

Seção "sobre mim" em formato de entrevista jornalística

### 📈 Outras Manchetes

Projetos destacados em formato de grid

### 📚 Arquivo de Edições

Lista completa de todos os projetos/repositórios

### 📧 Fale com a Redação

Seção de contato com links para redes sociais

## 🚀 Deploy

O projeto está configurado para deploy automático no GitHub Pages através do Vite.

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar como inspiração para seu próprio portfólio!

---

**Desenvolvido por Carlos Cosme Silva** + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
