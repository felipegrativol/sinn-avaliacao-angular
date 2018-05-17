
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
- A vaga é para desenvolvedores JR, Pleno e Sênior, o seu desempenho neste teste definirá em qual categoria você mais se adequa, então não se preocupe caso você não consiga fazer uma coisa ou outra.

## Atividades
 - É obrigatório o uso do Angular Material no projeto (http://material.angular.io)
 - Dúvidas de como utilizar o Angular? Utilize o Tour of Heroes: (https://angular.io/tutorial)
 - Criar uma tabela de usuários no componente Usuários
 - Exibir os dados: Nome, Documento, se a pessoa é Jurídica ou Física e a data de Expiração de seu cadastro no formato dd/MM/yyyy (exemplo: 16/05/2018)
 - Ordenação padrão pelo Nome
 - Criar uma tela para cadastro de novos usuários, solicitando preenchimento do nome, documento, um checkbox para jurídico ou física, data para expiração do cadastro (ela não pode ser menor do que a data atual) o tipo de pessoa que ele é e endereços.
 - Preencha o tipo de usuário com componente SELECT
 - Para o endereço, você pode utilizar uma api de validação do CEP. Se o cep for válido, preencher os campos de Logradouro, Bairro, Cidade e Estado.
 - O ideal é que a API seja chamada, somente quando o usuário tiver digitado 8 dígitos númericos.
 - Cada usuário poderá ter quantos endereços ele quiser.
 - Lembrando: Nenhuma atividade é eliminatória, mas é pode ser determinatória para o seu nível de experiência.
 - Boa sorte :)

## APIs Necessárias

 - Para buscar os tipos de pessoa existente: http://ec2-13-59-74-180.us-east-2.compute.amazonaws.com:8000/api/tipoUsuario
 - Para exibição dos usuários: http://ec2-13-59-74-180.us-east-2.compute.amazonaws.com:8000/api/usuarios
 - Para salvar usuários: http://ec2-13-59-74-180.us-east-2.compute.amazonaws.com:8000/api/usuarios
 - Para editar um usuário: http://ec2-13-59-74-180.us-east-2.compute.amazonaws.com:8000/api/usuarios/:id

 - Para buscar um CEP utilizar (08030310 é um exemplo válido): http://ec2-13-59-74-180.us-east-2.compute.amazonaws.com:8000/api/cep?cep=08030310


 Exemplo de POST válido:

     {
        "nome": "Thiago Rodrigues Alves",
        "email": "alvesthiago92@gmail.com",
        "isJuridica": true,
        "documento": 42801668893,
        "username": "allves92",
        "tipoUsuario": {
            "_id": "5a025d49394741002013c80c",
            "nome": "Cliente",
            "perfil": "CLIENTE"
        },
        "dataExpiracao": "2018-02-27T03:00:00.000Z",
        "enderecos": [{
            "cep": "08030310",
            "logradouro": "Rua Guaraitá",
            "numero": 947,
            "bairro": "Vila Curuçá",
            "cidade": "São Paulo",
            "estado": "SP",
            "_id": "5a1c03ef6b21303af0e9719f"
        }, {
            "cep": "08431810",
            "logradouro": "Rua São Raimundo Nonato",
            "numero": 74,
            "bairro": "Jardim Irene",
            "cidade": "São Paulo",
            "estado": "SP",
            "_id": "5a1c09254af12a370c0bcadc"
        }],
        "isAtivo": false
    }
