import { ProtocoloComponent } from './protocolo.component';
import { ProtocoloConsultaComponent } from './protocolo-consulta/protocolo-consulta.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProtocoloRoutingModule } from './protocolo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProtocoloRoutingModule
  ],
  declarations: [
    ProtocoloComponent,
    ProtocoloConsultaComponent]
})
export class ProtocoloModule { }
