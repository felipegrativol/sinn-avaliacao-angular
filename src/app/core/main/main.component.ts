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
    'Criar uma tabela de clubes no componente Clubes',
    'Exibir o escudo, nome, e posição dos times',
    'Ordenação padrão pela posição',
    'Não exibir o time caso ele não possua posição',
    'Filtrar tabela de Clubes pelo campo nome do time e posição',
    'Exibir um contador na tela inicial do tempo restante para o fechamento da rodada',
    'Se a rodada estiver acabada, não deixar entrar na tela de Clubes',
    '',
    'EXTRA',
    '',
    'Criar componente de Próxima Rodada exibindo o escudo + abreviacao do Time Mandante X escudo + abreviacao do Time Visitante',
  ];

  ngOnInit() {
  }

}
