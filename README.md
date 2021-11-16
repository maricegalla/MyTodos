# MyTodos

## Objetivo

Desenvolver um sistema de gerenciamento de tarefas utilizando a stack [MERN](https://www.mongodb.com/languages/mern-stack-tutorial).

## Requisitos técnicos

 - Front-End em React;
 - Back-End em NodeJS, com MongoDB;
 - Arquitetura em camadas;

## Funcionalidades

 - Visualizar a lista de tarefas;
 - Esta lista deve ser ordenável por ordem alfabética, data de criação ou por status;
 - Inserir uma nova tarefa na lista;
 - Remover uma tarefa da lista;
 - Atualizar uma tarefa da lista;
 - A tarefa deve possuir um status editável: pendente, em andamento ou pronto;

## Autora

- [Marília Cegalla Aldrighi](https://www.linkedin.com/in/marilia-aldrighi/)


## Para rodar Localmente

Clone o projeto

```bash
  git clone git@github.com:maricegalla/MyTodos.git
```

Abra o diretório do projeto

```bash
  cd mytodos
```

Inicie o MongoDb

```bash
  sudo service mongod start
```

Instale as dependências no Back-End

```bash
  cd Back-End
  npm install
```
E no Front-End
```bash
  cd Front-End
  npm install
```

Inicie o Back-End

```bash
  cd Back-End
  npm start
```
Inicie o Front-End

```bash
  cd Front-End
  npm start
```


## Variáveis de Ambiente

Para rodar este projeto, será necessário adicionar as seguintes variáveis no arquivo .env

No Back-End

`SECRET`
`DB_NAME`
`MONGO_DB_URL`

No Front-End

`REACT_APP_URL`

## Deploy

A aplicação está diponível na seguinte URL: https://mytodosfront.herokuapp.com/

![2XhUHDgA62](https://user-images.githubusercontent.com/76533793/141881287-3469e410-8d3b-4230-9811-1f5ed6e7d9f5.gif)



## Stacks e Ferramentas
<span>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" width="60px" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"  width="60px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"  width="60px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="60px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" width="60px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" width="60px"/>
</span>
