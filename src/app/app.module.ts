import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//modulos
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule} from '@angular/fire/compat'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
//componentes
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { VerifyUserComponent } from './componentes/verify-user/verify-user.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { RecuperarPassComponent } from './componentes/recuperar-pass/recuperar-pass.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    VerifyUserComponent,
    SpinnerComponent,
    RecuperarPassComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
