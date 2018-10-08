import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendasComponent } from './vendas.component';
import { VendasListaComponent } from './vendas-lista/vendas-lista.component';
import { VendasFormComponent } from './vendas-form/vendas-form.component';
import { VendasDetalheComponent } from './vendas-detalhe/vendas-detalhe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VendasComponent, VendasListaComponent, VendasFormComponent, VendasDetalheComponent]
})
export class VendasModule { }
