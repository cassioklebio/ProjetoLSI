import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClientesComponent } from './clientes.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';

const clientesRoutes = [
    {path: 'clientes', component: ClientesListaComponent},
    {path: 'clientes/novo', component: ClientesFormComponent},
    {path: 'clientes/lista',component: ClientesListaComponent},
    
    

];

@NgModule({
    imports:[RouterModule.forChild(clientesRoutes)],
    exports:[RouterModule] 
})


export class ClientesRoutingModule {}