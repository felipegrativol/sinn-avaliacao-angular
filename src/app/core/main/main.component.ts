import { slideInDownAnimation } from './../../shared/animations';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [slideInDownAnimation]

})
export class MainComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;

  constructor() { }

  tarefas =
  [
    ' É obrigatório o uso do Angular Material no projeto (http://material.angular.io)',
    'Dúvidas de como utilizar o Angular? Utilize o Tour of Heroes: (https://angular.io/tutorial)',
   ' Criar uma tabela de usuários no componente Usuários',
  ' Exibir os dados: Nome, Documento, se a pessoa é Jurídica ou Física e a data de Expiração de seu cadastro no formato dd/MM/yyyy (exemplo: 16/05/2018)',
  ' Ordenação padrão pelo Nome',
   ' Criar uma tela para cadastro de novos usuários, solicitando preenchimento do nome, documento, um checkbox para jurídico ou física, data para expiração do cadastro (ela não pode ser menor do que a data atual) o tipo de pessoa que ele é e endereços.',
   ' Preencha o tipo de usuário com componente SELECT',
   ' Para o endereço, você pode utilizar uma api de validação do CEP. Se o cep for válido, preencher os campos de Logradouro, Bairro, Cidade e Estado.',
   ' O ideal é que a API seja chamada, somente quando o usuário tiver digitado 8 dígitos númericos.',
   ' Cada usuário poderá ter quantos endereços ele quiser.',
   ' Lembrando: Nenhuma atividade é eliminatória, mas é pode ser determinatória para o seu nível de experiência.',
   ' Boa sorte :)'
];

  extras =
  [
    'Para buscar os tipos de pessoa existente realize um GET em',
    'http://ec2-13-59-74-180.us-east-2.compute.amazonaws.com:8000/api/tipoUsuario',
    'Para exibição dos usuários realize um GET em',
    'http://ec2-13-59-74-180.us-east-2.compute.amazonaws.com:8000/api/usuarios',
    'Para salvar um usuário, realize um POST na api acima',
    'Para buscar um CEP utilizar (08030310 é um exemplo válido):',
    'http://ec2-13-59-74-180.us-east-2.compute.amazonaws.com:8000/api/cep?cep=08030310',
    '',
    'EXTRA',
    'Crie um Editar usuário',
    'Para editar um usuário, realize um PUT passando o objeto usuário no corpo da requisição e o id como parâmetro',
    'Há um exemplo no README.MD'
  ];

  ngOnInit() {
  }

}
