import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FornecedorService } from './fornecedor.service';
import { FornecedorComponent } from './fornecedor.component';
import { FornecedorFormComponent } from './fornecedor-form/fornecedor-form.component';
import { FornecedorDetalheComponent } from './fornecedor-detalhe/fornecedor-detalhe.component';
import { FornecedorListaComponent } from './fornecedor-lista/fornecedor-lista.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule

  ],
  declarations: [
    FornecedorComponent,
    FornecedorFormComponent,
    FornecedorDetalheComponent,
    FornecedorListaComponent,

  ],
  providers:[FornecedorService]
})
export class FornecedorModule { }
