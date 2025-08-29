# 📚 Meu Catálogo Pessoal de Obras Literárias

Este projeto é um aplicativo mobile de tela única desenvolvido como parte da primeira avaliação prática da disciplina, consolidando os conhecimentos dos Módulos 1 e 2. O aplicativo exibe uma lista de obras literárias favoritas, carregadas a partir de um arquivo de dados local.

## ✨ Funcionalidades

- **Visualização de Catálogo:** Exibe uma lista rolável de livros e obras.
- **Detalhes do Item:** Cada item na lista mostra o título, autor (subtítulo) e o ano de publicação.
- **Dados Locais:** As informações são carregadas de um arquivo `catalogo.json` na raiz do projeto, facilitando a adição ou remoção de itens.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

- **React Native:** Framework para desenvolvimento de aplicações móveis multiplataforma.
- **Expo:** Plataforma e conjunto de ferramentas para simplificar o desenvolvimento e o build de apps React Native.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática ao código, aumentando a segurança e a manutenibilidade.

## 📂 Estrutura do Projeto

O código foi organizado seguindo as boas práticas de componentização para garantir clareza e separação de responsabilidades:

```
meu-catalogo-pessoal/
├── app/
│   └── index.tsx         # Ponto de entrada da aplicação, renderiza a tela principal.
├── assets/               # Pasta para imagens e fontes.
├── components/
│   └── CatalogoScreen.tsx  # Componente principal que contém toda a lógica e UI da tela.
├── catalogo.json         # Arquivo com o array de dados das obras literárias.
└── package.json          # Dependências e scripts do projeto.
```

## ⚙️ Como Rodar o Projeto

Para executar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd meu-catalogo-pessoal
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento do Expo:**
    ```bash
    npx expo start
    ```

5.  **Teste no seu celular:**
    - Baixe o aplicativo **Expo Go** na App Store ou Google Play.
    - Escaneie o QR Code exibido no terminal ou na página do navegador.

---

Desenvolvido com ❤️ para a avaliação prática.
