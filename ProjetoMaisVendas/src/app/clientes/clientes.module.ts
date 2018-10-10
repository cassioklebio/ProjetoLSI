import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

import { ClientesService } from './clientes.service';

import { ClientesComponent } from './clientes.component';
import { ClientesRoutingModule } from './clientes.routing.module';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { ClientesDetalheComponent } from './clientes-detalhe/clientes-detalhe.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ClientesRoutingModule
  ],
  declarations: [ 
    ClientesComponent,
    ClientesFormComponent,
    ClientesDetalheComponent,
    ClientesListaComponent
  ],
  providers: [ClientesService]
})
export class ClientesModule { }
