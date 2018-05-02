import { NgModule, Optional, SkipSelf } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';


import { throwIfAlreadyLoaded } from './core-import-guard';
import { MenuComponent } from './navbar/menu/menu.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [SharedModule, CommonModule, AppRoutingModule],
  exports: [NavbarComponent],
  declarations: [NavbarComponent, MenuComponent, MainComponent]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
