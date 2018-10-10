import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { VendasComponent } from './vendas.component';
import { VendasListaComponent } from './vendas-lista/vendas-lista.component';
import { VendasFormComponent } from './vendas-form/vendas-form.component';
import { VendasDetalheComponent } from './vendas-detalhe/vendas-detalhe.component';
import { VendasService } from './vendas.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule

  ],
  declarations: [
    VendasComponent,
    VendasListaComponent,
    VendasFormComponent,
    VendasDetalheComponent
  ],
  providers:[VendasService]
  
})
export class VendasModule { }
