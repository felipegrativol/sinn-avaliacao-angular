
# sinn-avaliacao-angular
Teste para vaga de Front-End na Sinn Tecnlogia
  

## Pre-requisites

You will need [NodeJS](https://nodejs.org/en/) installed on your machine.

  

You will also need [Angular-CLI](https://cli.angular.io/) installed running `sudo npm install -g @angular/cli`.

  

## Installing dependencies


Use `npm install` or `npm i` to install all dependencies on [package.json](package.json)


## Development server


Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Atividades

 - Criar uma tabela de clubes no componente Clubes
 - Exibir o escudo, nome, e posição dos times
 - Ordenação padrão pela posição
 - Não exibir o time caso ele não possua posição
 - Filtrar tabela de Clubes pelo campo nome do time e posição
 - Exibir um contador na tela inicial do tempo restante para o fechamento da rodada
 - Se a rodada estiver acabada, não deixar entrar na tela de Clubes

 - **EXTRA**
 - Criar componente de Próxima Rodada exibindo o escudo + abreviacao do Time Mandante X escudo + abreviacao do Time Visitante

## APIs Necessárias

Para exibição dos clubes: https://api.cartolafc.globo.com/clubes
Para exibição da próxima rodada: https://api.cartolafc.globo.com/partidas