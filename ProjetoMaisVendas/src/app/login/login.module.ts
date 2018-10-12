import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginDetalheComponent } from './login-detalhe/login-detalhe.component';
import { LoginListaComponent } from './login-lista/login-lista.component';
import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';

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
  providers:[AuthService]
})
export class LoginModule { }
