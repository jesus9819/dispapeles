import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { LoginComponent } from './componentes/login/login.component';
import { RecuperarPassComponent } from './componentes/recuperar-pass/recuperar-pass.component';
import { RegisterComponent } from './componentes/register/register.component';
import { VerifyUserComponent } from './componentes/verify-user/verify-user.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'verifyUser',component:VerifyUserComponent},
  {path: 'recuperarPass',component:RecuperarPassComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path: '**', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
