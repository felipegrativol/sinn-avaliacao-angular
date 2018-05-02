import { ProtocoloConsultaComponent } from './protocolo-consulta/protocolo-consulta.component';
import { Routes, RouterModule } from '@angular/router';
import { ProtocoloComponent } from './protocolo.component';
import { NgModule } from '@angular/core';

const protocoloRoutes: Routes = [{
    path: 'protocolo',
    component: ProtocoloComponent,
    data: {
      title: 'Protocolos',
      icon: 'dashboard',
      active: true
    },
    children: [{
      path: 'consulta',
      component: ProtocoloConsultaComponent,
      data: {
        title: 'Consulta',
        icon: 'search',
        active: true
      }
    }]
  }];

@NgModule({
  imports: [RouterModule.forChild(protocoloRoutes)],
  exports: [RouterModule]
})
export class ProtocoloRoutingModule {}
