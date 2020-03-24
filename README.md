<p align="center">
  <img src="https://raw.githubusercontent.com/burn-c/Tasks/master/src/assets/logo.png" height="150" width="150" alt="Tasks" />
</p>

<h1 align="center">Tasks</h1>
<p align="center">
Aplicação de gerenciamento de tarefas e atividades para sua equipe!
</p>


### Instalação e executar

1. Clonar repositório:

```sh
git clone git@github.com:burn-c/Tasks.git
```

## Frontend

1. Instalar as dependências utilizando o comando:

a. Acessar diretório raiz:

```sh
cd Tasks

yarn
```

2. Executar o projeto:

```sh
yarn start
```


## Backend

### Instalação e executar

1. Clonar repositório:

```sh
git clone git@github.com:burn-c/TasksBack-end.git
```
2. Instalar as dependências utilizando o comando:

a. Acessar diretório raiz:

```sh
cd TasksBack-end 

yarn
```

2. Configurar acesso Postgres `/src/config/database.js` ( Docker ).

  a. Criar tabelas:

```sh
yarn sequelize db:migrate
```

  b. Criar usuário ADMIN:

```sh
yarn sequelize db:seed:all
```
Obs: Dados de login do ADMIN:

e-mail: admin@tasks.com

senha: 123456

3. Executar o projeto:

```sh
yarn dev
```
