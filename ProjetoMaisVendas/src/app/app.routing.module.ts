import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { LivrosComponent } from "./livros/livros.component";
import { ClientesComponent } from "./clientes/clientes.component";
import { VendasComponent } from "./vendas/vendas.component";
import { RelatoriosComponent } from "./relatorios/relatorios.component";

const appRoutes : Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'livros', component: LivrosComponent},
    {path: 'clientes', component: ClientesComponent},
    {path: 'relatorios', component: RelatoriosComponent},
    {path: 'vendas', component: VendasComponent}
   
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})






export class AppRoutingModule{}