import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivrosRoutingModule } from './livros.routing.module';
import { LivrosComponent } from './livros.component';
import { LivrosDetalheComponent } from './livros-detalhe/livros-detalhe.component';
import { LivrosListaComponent } from './livros-lista/livros-lista.component';
import { LivrosFormComponent } from './livros-form/livros-form.component';



@NgModule({
  imports: [
    CommonModule,
    LivrosRoutingModule
  ],
  
  declarations: [ LivrosComponent, LivrosDetalheComponent, LivrosListaComponent, LivrosFormComponent]
})
export class LivrosModule { }
