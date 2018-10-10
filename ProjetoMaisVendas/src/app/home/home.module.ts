import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeService } from './home.service';
import { LivrosComponent } from '../livros/livros.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    LivrosComponent
  ],
  providers: [HomeService]
})
export class HomeModule { }
