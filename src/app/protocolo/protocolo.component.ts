import { HttpClient } from '@angular/common/http';
import { Component, HostBinding, OnInit } from '@angular/core';


@Component({
  selector: 'app-protocolo',
  templateUrl: './protocolo.component.html',
  styleUrls: ['./protocolo.component.scss'],

})
export class ProtocoloComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

}
