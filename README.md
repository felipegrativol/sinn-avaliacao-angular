# sinn-avaliacao-angular

Avaliação para vaga de Front-End na Sinn Tecnlogia

## Pre-requisites

You will need [NodeJS](https://nodejs.org/en/) installed on your machine.

You will also need [Angular-CLI](https://cli.angular.io/) installed running `sudo npm install -g @angular/cli`.

## Installing dependencies

Use `npm install` or `npm i` to install all dependencies on [package.json](package.json)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Sobre o cargo

- A vaga é para desenvolvedor front-end.

## Atividades

- É obrigatório o uso do Angular Material no projeto (Já está instalado e importado neste projeto),
- Defina a url da API nos environments: "https://reqres.in/api",
- Crie um Módulo "usuario", e organize seu(s) componente(s) e serviço(s) como achar melhor,
- Deixe as paginas criadas acessíveis no menu principal do projeto,
- Liste os usuários pelo enpoint: /users (Ordenação padrão pela ordem alfabética do campo "first_name"),
- Coloque paginação e ordenação,
- Em cada linha da tabela, criar botão "Editar" e "Excluir",
- Para a funcionalidade Editar, abra um modal (Angular Material) com um formulário (utilize reactive forms) e preencha os campos com os dados do usuario selecionado,
- No salvar, no body do PUT passe o novo "name" e "job", no endpoint /users/{idUsuario}, e dê uma mensagem de feedback para o usuário após salvar,
- No excluir, abra um modal (Angular Material) de confirmação de exclusão, se ele concordar, mande um DELETE no endpoint users/{idUsuario}, e de uma - mensagem de feedback para o usuário após excluir,
- Queremos ver a organização do seu codigo e pastas. Lógica é o que mais valorizamos.,
- Boa sorte :)

- Lembrando: Nenhuma atividade é eliminatória, mas pode ser determinatória para o seu nível de experiência.
- Boa sorte :)

## APIs Necessárias

- Lista de todos os usuarios: https://reqres.in/api [GET]
- Dados de usuario especifico: https://reqres.in/api/users/{idusuario} [GET]
- Editar usuario: https://reqres.in/api/users/{idusuario} [PUT]
- Excluir usuario: https://reqres.in/api/users/{idusuario} [DELETE]
