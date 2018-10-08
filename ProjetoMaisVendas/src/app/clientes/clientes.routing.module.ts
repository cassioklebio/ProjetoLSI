import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesComponent } from './clientes.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ClientesDetalheComponent } from './clientes-detalhe/clientes-detalhe.component';

const clientesRoutes: Routes = [
    {path: 'clientes', component: ClientesComponent},
    {path: 'clientes/lista',component: ClientesListaComponent},
    {path: 'clientes/detalhe', component: ClientesDetalheComponent}

];

@NgModule({
    imports:[RouterModule.forChild(clientesRoutes)],
    exports:[RouterModule] 
})


export class ClientesRoutingModule {}