import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocoloConsultaComponent } from './protocolo-consulta.component';

describe('ProtocoloConsultaComponent', () => {
  let component: ProtocoloConsultaComponent;
  let fixture: ComponentFixture<ProtocoloConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocoloConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocoloConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
