import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { VendasFormComponent} from './vendas-form/vendas-form.component';
import { VendasListaComponent} from './vendas-lista/vendas-lista.component';

const vendasRoutes: Routes = [
    {path: 'vendas', component: VendasListaComponent},
    {path: 'vendas/novo', component: VendasFormComponent},
    {path: 'vendas/lista', component: VendasListaComponent}

];

@NgModule({
    imports: [RouterModule.forChild(vendasRoutes)],
    exports: [RouterModule]

})


export class VendasRoutingModule {}