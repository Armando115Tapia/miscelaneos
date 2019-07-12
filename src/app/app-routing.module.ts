import { UsuarioDetalleComponent } from './componentes/usuario/usuario-detalle.component';
import { UsuarioEditarComponent } from './componentes/usuario/usuario-editar.component';
import { UsuarioNuevoComponent } from './componentes/usuario/usuario-nuevo.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {
    path: 'usuario/:id',
    component: UsuarioComponent,
  children:[
    {path:'nuevo', component: UsuarioNuevoComponent},
    {path:'editar', component: UsuarioEditarComponent},
    {path:'detalle', component: UsuarioDetalleComponent},
    {path:'**', pathMatch: 'full', redirectTo:'nuevo'}
  ]},
  {path:'**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
