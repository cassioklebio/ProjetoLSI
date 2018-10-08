import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './login/login.component';
import { LivrosComponent } from './livros/livros.component';
import { ClientesComponent } from './clientes/clientes.component';
import { VendasComponent } from './vendas/vendas.component';
import { HomeComponent } from './home/home.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { FornecedorFormComponent } from './fornecedor/fornecedor-form/fornecedor-form.component';
import { FornecedorDetalheComponent } from './fornecedor/fornecedor-detalhe/fornecedor-detalhe.component';
import { FornecedorListaComponent } from './fornecedor/fornecedor-lista/fornecedor-lista.component';
import { ContatoComponent } from './contato/contato.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LivrosComponent,
    ClientesComponent,
    VendasComponent,
    HomeComponent,
    FornecedorComponent,
    FornecedorFormComponent,
    FornecedorDetalheComponent,
    FornecedorListaComponent,
    ContatoComponent,
    RelatoriosComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
