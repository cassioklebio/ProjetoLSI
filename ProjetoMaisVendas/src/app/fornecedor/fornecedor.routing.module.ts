import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FornecedorComponent } from './fornecedor.component';
import { FornecedorListaComponent } from './fornecedor-lista/fornecedor-lista.component';
import { FornecedorDetalheComponent } from './fornecedor-detalhe/fornecedor-detalhe.component';
import { FornecedorFormComponent } from './fornecedor-form/fornecedor-form.component';


const fornecedorRoutes: Routes = [
    {path: 'fornecedor', component: FornecedorComponent},
    {path: 'fornecedor/novo', component: FornecedorFormComponent},
    {path: 'fornecedor/lista', component: FornecedorListaComponent},
    {path: 'fornecedor/detalhe', component: FornecedorDetalheComponent}

];

@NgModule({
    imports: [RouterModule.forChild(fornecedorRoutes)],
    exports:[RouterModule]

})



export class FornecedorRoutingModule{}