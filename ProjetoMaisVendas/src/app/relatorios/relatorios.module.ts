import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RelatorioService } from './relatorios.service';
import { RelatoriosComponent } from './relatorios.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
    
  ],
  declarations: [
    RelatoriosComponent
  ],
  providers:[RelatorioService]
})
export class RelatoriosModule { }
