import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDetalheComponent } from './login-detalhe.component';

describe('LoginDetalheComponent', () => {
  let component: LoginDetalheComponent;
  let fixture: ComponentFixture<LoginDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
