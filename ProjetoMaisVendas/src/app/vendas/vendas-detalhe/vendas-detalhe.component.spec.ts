import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendasDetalheComponent } from './vendas-detalhe.component';

describe('VendasDetalheComponent', () => {
  let component: VendasDetalheComponent;
  let fixture: ComponentFixture<VendasDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendasDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendasDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
