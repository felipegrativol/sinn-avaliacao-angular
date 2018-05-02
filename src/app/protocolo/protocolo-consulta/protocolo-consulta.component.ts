import { HttpClient } from '@angular/common/http';
import { Component, HostBinding, OnInit } from '@angular/core';
import { slideInDownAnimation } from '../../shared/animations';

@Component({
  selector: 'app-protocolo-consulta',
  templateUrl: './protocolo-consulta.component.html',
  styleUrls: ['./protocolo-consulta.component.scss'],
  animations: [slideInDownAnimation]
})
export class ProtocoloConsultaComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';


  constructor(public http: HttpClient) { }

  ngOnInit() {}

}
