import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContatoService } from './contato.service';
import { ContatoComponent } from './contato.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
    
  ],
  declarations: [
    ContatoComponent
  ],

  providers: [ContatoService]
})
export class ContatoModule { }
