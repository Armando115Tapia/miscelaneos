import { UsuarioComponent } from "./components/usuario/usuario.component";
import { HomeComponent } from "./components/home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { USUARIO_RUTAS } from "./components/usuario/usuario.routes";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "usuario/:id",
    component: UsuarioComponent,
    children: USUARIO_RUTAS
  },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
