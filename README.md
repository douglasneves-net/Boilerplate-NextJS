# Iniciando

## Novo Projeto

```bash
yarn create next-app
```

## Instalando TypeScript

```bash
touch tsconfig.json
```

- Ou crie o arquivo manualmente.

```bash
yarn add --dev typescript @types/react @types/node
```

- O typescript cria o arquivo next-end.d.ts que declara alguns tipos que fornece os Types do Next e conseguir utilizar os auto-complete.

- O arquivo tsconfig.json serve para configurar o compilador do Typescript.

- Crie a pasta src e mova a pasta pages, depois modifique a extensão dos arquivos
  - Se for um codigo que mistura HTML + Javascript utilize .tsx
  - Se for so um arquivo puramente de metodos, funções use a extensão .ts

## Algumas configurações

- Editor Config -> Você define algumas regras, como identação do codigo.

- Eslint -> Organiza o codigo e avisa uma violação de regra, para instalar o eslint no projeto execute o comando

```bash
npx eslint --init
```

- No ESLINT, vai ser exibido alguma questões, responsa da seguinte maneira:
  - To check syntax and find Problems
  - Javascript modules (import/export)
  - React
  - Yes
  - Browser
  - JSON
  - N
- Agora instale os plugins necessarios do eslint

```bash
eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
```

- Tambem adicionamos alguns plugins adicionais ao eslint, importante, acesse o site do plugin para adicionar no arquivo .eslintrc.json os parametros de configuração necessarios para o plugin abaixo funcionar corretamente.

```bash
yarn add eslint-plugin-react-hooks
```

- Desativar a regra do eslint prop-types para ele não ficar avisando.

```bash
"react/prop-types": "off"
```

- Vamos desativar tambem o aviso que informa que precisamos adicionar o import do React em todas as paginas, vamos desativar porque o next.js faz isso automaticamente.

```bash
"react/react-in-jsx-scope": "off"
```

- As vezes temos algumas funções que o typescript sabe o retorno, por exemplo você ta retornando 3 que é um numero e o typescript reconhece, mais existe uma regra no eslint que valida se foi tipado, então vamos desativar para esses casos, nos casos em que o typescript não consegue inferir você é obrigado a tipar.

```bash
"explicit-module-boundary-types": "off"
```

- O Eslint precisa saber qual versão do react, para resolver isso dentro do next.js adicionamos os parametros abaixo no arquivo do .eslintrc.json.

```bash
"settings": {
  "react": {
    "version": "detect"
  }
},
```

- Pronto o ESLINT esta concluido (Não esquecer de instalar o plugin do ESLINT)

- Agora vamos configurar o Prettier que vai formatar o codigo para seguir algumas regras que nos mesmo conseguimos definir, a vantagem é que se mais pessoas estiver desenvolvendo todos terão o mesmo padrão de formatação, por exemplo: usar "" duplas para ''.

- Importante o ESLINT serve para tratar a sintaxe do projeto, ou seja, avalia variaveis que não estão sendo usadas, imports desnecessarios entre outros, enquanto o Prettier é responsavel somente para formatação do aquivo. "" para '', espaço entre conchetes, virgulas no final, ; no final de tudo, inclusive o prettier tem uma recomendação para quando vamos usar com ESLINT.

- Para isso modificamos o arquivo do .eslint para na parte de extends conforme a documentação oficial do Prettier que fala que é necessario mudar o arquivo para ter compatibilidade com eslint.

https://github.com/prettier/eslint-config-prettier

- Agora crio o arquivo .prettierrc na raiz do projeto com a seguinte configuração.

```bash
{
  "trailingComma": "none",
  "semi": false,
  "singleQuote": true
}

```

- Por ultimo vamos utilizar um plugin chamado Git Hook, ele vai executar os test do eslint e se tudo passar ele permite o commit, evita commits cheios de erros.
- Essa parte vou pular, porque é um processo opcional.

## Instalando o Jest - TDD

```bash
yarn add --dev jest @babel/preset-typescript @types/jest
```

- Agora mudamos no .eslintrc.json

```bash
  "env": {
    ...
    "jest": true,
    "node": true
  }
```

- Agora vamos criar um arquivo de configuração para o jest, na raiz do projeto crie jest.config.js

```bash
module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
```

- Agora vamos precisar fazer a configuração do babel, para isso crie um arquivo na raiz do projeto

```bash
{
  "presets": ["next/babel", "@babel/preset-typescript"]
}
```

- Agora vamos criar a pasta .jest na raiz do projeto com um arquivo setup.ts, ficara nesse arquivo informações para o jest, nesse momento ficara sem conteudo.

- Agora modificar o package.json, adicionar em script:

```bash
  "test" : "jest"
```

- JEST é o framework de test e test-library é a biblioteca que tem os assets para rodar os testes.

```bash
yarn add --dev @testing-library/dom @testing-library/react
```

- Agora no arquivo setup.ts dentro da pasta .jest vamos adicionar o import.

```bash
import '@testing-library/jest-dom';
```

- Podemos ter um test que fica observando alterações no codigo, para isso em scripts dentro de package.json crie a seguinte linha.

```bash
"test:watch": "yarn test -watch"
```

- Podemos usar a função de snapshot do jest que quando executado dentro de um test ele cria uma pasta _snapshots_ aonde ele guarda o que espera do codigo, se no snap tiver esperando um h1 e você modificar para h2 ele vai notificar e se você precisar atualizar o snapshot aperte U, não vi necessidade de utilizar esse codigo.

## Styled Components

- O styled components precisa renderizar na parte do servidor junto com React,

```bash
yarn add @types/styled-components babel-plugin-styled-components
```

No .babelrc adicione

```bash
  "plugins": [
    [
      "babel-plugin-styled-components",
      {
        "ssr": true
      }
    ]
  ],
```

- Agora vamos adicionar o styled-components

```bash
yarn add styled-components
```

- Agora na documentaão do styled-components ele instrui a criar um arquivo \_document.tsx, segue link: https://styled-components.com/docs/advanced

```bash
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

}
```

## Estilos Globais

- Criamos o arquivo global.ts dentro de pages/styles aonde definimos o estilo global.
- No arquivo de configuração do typescript podemos adicionar o caminho absoluto do src, para isso modique o arquivo tsconfig.json

```bash
  "baseUrl": "src",
```
