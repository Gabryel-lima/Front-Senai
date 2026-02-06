# Vite — referência rápida

Este documento mostra como gerar um novo app com Vite (`my-app`) ou instalar o Vite em um projeto existente. Também explica brevemente o que é o Vite.

O que é o Vite
- Vite é uma ferramenta moderna de scaffolding e bundling para aplicações web. Ele fornece um gerador de projetos (scaffold) com templates prontos e um servidor de desenvolvimento rápido com recarregamento instantâneo.

Gerar um novo projeto (criar `my-app`)
1. No diretório onde quer criar a pasta do projeto (por exemplo, na raiz `Front-Senai`) rode:

```bash
npm create vite@latest my-app
cd my-app
npm install
npm run dev
```

2. Se quiser evitar o prompt interativo e escolher um template direto, adicione `--` seguido de `--template`:

```bash
npm create vite@latest my-app -- --template vanilla
# ou
npm create vite@latest my-app -- --template react
```

Instalar o Vite em um projeto existente
1. No root do projeto (onde já existe `package.json`) instale como dependência de desenvolvimento:

```bash
npm install -D vite@latest
```

2. Adicione um script para rodar o servidor de desenvolvimento em `package.json`:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

3. Rode o servidor de desenvolvimento:

```bash
npm run dev
```

Como definir o nome do app
- Ao criar com `npm create vite@latest <nome>` o diretório e o nome inicial do projeto serão definidos pelo parâmetro `<nome>`.
- Em projetos existentes, edite o campo `name` em `package.json` para ajustar o nome do pacote.

Notas e recomendações
- Templates comuns: `vanilla`, `react`, `vue`, `svelte`, entre outros. Use `-- --template <nome>` para escolher.
- Após criar com `npm create`, sempre entre na pasta do projeto e rode `npm install` antes de `npm run dev`.
- Consulte a documentação oficial em https://vitejs.dev/ para opções avançadas.

Arquivo criado na raiz do workspace `Front-Senai`.
