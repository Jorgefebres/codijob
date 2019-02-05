import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './components/general/register/register.component';
import {MainComponent} from './components/general/main/main.component';
import {PerfilComponent} from './components/usuario/perfil/perfil.component';

const routes: Routes = [
  {
    path: 'registro',
    component: RegisterComponent
  },
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
