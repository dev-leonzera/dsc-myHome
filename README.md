# dsc-myHome

Projeto da disciplina de Desenvolvimento de Sistemas Corporativos do curso de Tecnologia em Sistemas para Internet do IFRN Campus Currais Novos

## O que é?

Um sistema básico para gerenciar uma residência

## O que ele faz?

Nele é possível administrar coisas como:

- Contas a pagar (água, luz, energia, etc...)

- Despesas diversas da casa (Reformas, compras do mês, etc....)

- Despensa da casa

## Tecnologias e Conceitos utilizados

- Typescript

- NodeJS & Express

- TypeORM, utilizando o pattern Active Record

- Inversify, aplicando a inversão de controle e a injeção de dependência


## Como rodar

- Após o clone:

- cd dsc-myHome

- npm i (Para instalar as dependências)

- npm run dev (Para rodar o sistema)

- npm run typeorm:cli -- migration:run (Para rodar as migrations)