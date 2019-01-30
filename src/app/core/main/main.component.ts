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

  constructor() {}

  tarefas = [
    ' É obrigatório o uso do Angular Material no projeto (Já está instalado e importado neste projeto)',
    ' Defina a url da API nos environments: "https://reqres.in/api"',
    ' Crie um Módulo "usuario", e organize seu(s) componente(s) e serviço(s) como achar melhor',
    ' Deixe as paginas criadas acessíveis no menu principal do projeto',
    ' Liste os usuários pelo enpoint: /users (Ordenação padrão pela ordem alfabética do campo "first_name")',
    ' Coloque paginação e ordenação',
    ' Em cada linha da tabela, criar botão "Editar" e "Excluir"',
    ' Para a funcionalidade Editar, abra um modal (Angular Material) com um formulário (utilize reactive forms) e preencha os campos com os dados do usuario selecionado',
    ' No salvar, no body do PUT passe o novo "name" e "job", no endpoint /users/{idUsuario}, e dê uma mensagem de feedback para o usuário após salvar',
    ' No excluir, abra um modal (Angular Material) de confirmação de exclusão, se ele concordar, mande um DELETE no endpoint users/{idUsuario}, e de uma mensagem de feedback para o usuário após excluir',
    ' Queremos ver a organização do seu codigo e pastas. Lógica é o que mais valorizamos.',
    ' Boa sorte :)'
  ];

  extras = [
    'Liste no formato de miniatura com bordas arredondadas o avatar em cada linha da tabela',
    'Separe a listagem de usuários em um subcomponente, utilizando eventemitter para passar ações (excluir e editar) do subcomponente para o componente pai'
  ];

  ngOnInit() {}
}
