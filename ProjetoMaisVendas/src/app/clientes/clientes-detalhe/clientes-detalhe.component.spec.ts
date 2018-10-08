import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesDetalheComponent } from './clientes-detalhe.component';

describe('ClientesDetalheComponent', () => {
  let component: ClientesDetalheComponent;
  let fixture: ComponentFixture<ClientesDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
