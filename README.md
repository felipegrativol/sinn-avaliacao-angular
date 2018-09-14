
# sinn-avaliacao-angular
Avaliação  para vaga de Front-End na Sinn Tecnlogia
  

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
 - Aqui usamos o Angular Material nos projetos (http://material.angular.io) e o mesmo ja está incorporado nesse projeto, porém o teste fica ao seu critério a escolha do framework visual.
 - Dúvidas de como utilizar o Angular? Utilize o Tour of Heroes: (https://angular.io/tutorial)
 - Criar um componente com uma tabela para listar todas as tarefas
 - Ordenação padrão pelo Id
 - Ao clicar em uma task na tabela, exibir um modal com os dados daquela tarefa
 - Criar um filtro no topo da página para filtrar a exibição das tarefas, com as seguintes opções ( Listar todas, Listar Abertas, Listar Finalizadas )
 - Inserir Tarefa
 - Atualizar Tarefa
 - Lembrando: Nenhuma atividade é eliminatória, mas pode ser determinatória para o seu nível de experiência.
 - Boa sorte :)

## APIs Necessárias
 - Lista de todas as tarefas: https://jsonplaceholder.typicode.com/todos (GET)
 - Lista de tarefa especifica: https://jsonplaceholder.typicode.com/todos/1 (GET)
 - Salvar uma tarefa: https://jsonplaceholder.typicode.com/todos (POST) 
 ```json
 {
    "userId": 1,
    "title": "teste",
    "completed": false
}
```
 - Atualizar uma tarefa: https://jsonplaceholder.typicode.com/todos/1 (PUT)
 ```json
 {
    "userId": 1,
    "id": 200,
    "title": "salvando outro titulo",
    "completed": true
}
 ```

 OBS: Essa API de teste por se tratar de um mock para testes, ela não salva ou atualiza no banco de dados, então apenas consideramos a realização do POST e PUT e verificação do seu status e body de retorno para fornecer ao usuário um feedback.

## Extras
 - Documente seu desenvolvimento usando commits por funcionalidades ( não envie todo o seu teste em um único commit ).
 - Código limpo e claro.
 - Fique a vontade para adicionar outras funcionalidades caso julgue necessário para a solução final.
