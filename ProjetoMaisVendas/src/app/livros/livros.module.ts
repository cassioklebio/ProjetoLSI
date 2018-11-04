import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LivrosRoutingModule } from './livros.routing.module';
import { LivrosComponent } from './livros.component';
import { LivrosDetalheComponent } from './livros-detalhe/livros-detalhe.component';
import { LivrosListaComponent } from './livros-lista/livros-lista.component';
import { LivrosFormComponent } from './livros-form/livros-form.component';
import { LivrosService } from './livros.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    LivrosRoutingModule
  ],
  declarations: [
    LivrosComponent,
    LivrosDetalheComponent,
    LivrosListaComponent,
    LivrosFormComponent
  ],
  providers: [LivrosService]
})
export class LivrosModule { }
