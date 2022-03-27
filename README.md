
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




