
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


