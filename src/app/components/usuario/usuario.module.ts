import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { VerifyMailComponent } from './verify-mail/verify-mail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RecoverPasswordComponent,
    VerifyMailComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule,
  ]
})
export class UsuarioModule { }
