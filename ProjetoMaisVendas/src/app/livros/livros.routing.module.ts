import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivrosComponent} from './livros.component';
import { LivrosDetalheComponent } from './livros-detalhe/livros-detalhe.component';
import { LivrosFormComponent } from './livros-form/livros-form.component';
import { LivrosListaComponent } from './livros-lista/livros-lista.component';



const livrosRoutes: Routes = [
    {path: 'livros', component: LivrosListaComponent},
    {path: 'livros/detalhe', component: LivrosDetalheComponent},
    {path: 'livros/novo', component: LivrosFormComponent},
    {path: 'livros/lista', component: LivrosListaComponent},
    {path: 'livros/editar', component: LivrosFormComponent}
];

@NgModule ({
    imports: [RouterModule.forChild(livrosRoutes)],
    exports:[RouterModule]

})


export class LivrosRoutingModule {}