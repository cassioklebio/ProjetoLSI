import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule, Optional } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AuthService } from './login/auth.service';
import { TextMaskModule } from 'angular2-text-mask';


import { LivrosModule } from './livros/livros.module';
import { ClientesModule } from './clientes/clientes.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { VendasModule } from './vendas/vendas.module';
import { ContatoModule } from './contato/contato.module';
import { RelatoriosModule } from './relatorios/relatorios.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
    ],
    imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LivrosModule,
    ClientesModule,
    FornecedorModule,
    VendasModule,
    ContatoModule,
    RelatoriosModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
