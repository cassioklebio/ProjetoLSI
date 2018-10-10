import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginService } from './login.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginDetalheComponent } from './login-detalhe/login-detalhe.component';
import { LoginListaComponent } from './login-lista/login-lista.component';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    LoginComponent,
    LoginFormComponent,
    LoginDetalheComponent,
    LoginListaComponent
  ],
  providers:[LoginService]
})
export class LoginModule { }
