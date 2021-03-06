import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { RegisterComponent } from './register/register.component';
import { VerifyMailComponent } from './verify-mail/verify-mail.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'recuperar-password', component: RecoverPasswordComponent },
  { path: 'registrar', component: RegisterComponent },
  { path: 'verify', component: VerifyMailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
