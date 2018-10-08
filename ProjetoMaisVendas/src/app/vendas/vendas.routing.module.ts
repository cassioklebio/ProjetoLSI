import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendasComponent } from './vendas.component';
import { VendasFormComponent} from './vendas-form/vendas-form.component';
import { VendasListaComponent} from './vendas-lista/vendas-lista.component';

const vendasRoutes: Routes = [
    {path: 'vendas', component: VendasComponent},
    {path: 'vendas/vendas', component: VendasFormComponent},
    {path: 'vendas/lista', component: VendasListaComponent}

];

@NgModule({
    imports:[RouterModule.forChild(vendasRoutes)],
    exports:[RouterModule]

})


export class VendasRoutingModule{}