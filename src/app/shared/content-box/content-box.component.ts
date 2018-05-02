import { slideInDownAnimation } from './../animations';
import { Component, HostBinding, OnInit } from '@angular/core';


@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.scss'],
  animations: [slideInDownAnimation]
})
export class ContentBoxComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  constructor() { }

  ngOnInit() {
  }

}
