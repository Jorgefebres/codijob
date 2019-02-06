import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './components/general/register/register.component';
import {MainComponent} from './components/general/main/main.component';
import {PerfilComponent} from './components/usuario/perfil/perfil.component';
import { LoginComponent } from './components/general/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

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
    component: PerfilComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
