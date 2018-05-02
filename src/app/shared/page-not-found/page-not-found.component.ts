import { Component, HostBinding, OnInit } from '@angular/core';
import { slideInDownAnimation } from '../../shared/animations';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  animations: [slideInDownAnimation]
})
export class PageNotFoundComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  constructor() { }

  ngOnInit() {
  }

}
