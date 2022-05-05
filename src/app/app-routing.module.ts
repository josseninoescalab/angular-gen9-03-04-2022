import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteEdicionComponent } from './pages/paciente/paciente-edicion/paciente-edicion.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

const routes: Routes = [
  {path: "usuario", component: UsuarioComponent},
  {
    path: 'paciente', component: PacienteComponent, children: [
      { path: 'nuevo', component: PacienteEdicionComponent },
      { path: 'edicion/:id', component: PacienteEdicionComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
