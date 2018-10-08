import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { ClientesDetalheComponent } from './clientes-detalhe/clientes-detalhe.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ClientesComponent, ClientesFormComponent, ClientesDetalheComponent, ClientesListaComponent]
})
export class ClientesModule { }
