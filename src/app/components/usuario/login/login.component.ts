import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErroresService } from '../../services/errores.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private angularFireAuth: AngularFireAuth,
    private erroresService: ErroresService,
    private router: Router,
  ) {
    this.loginForm = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    const usuario = this.loginForm.get('usuario').value;
    const password = this.loginForm.get('password').value;
    this.angularFireAuth.auth.signInWithEmailAndPassword(usuario, password).then(response => {
      console.log(response, 'Logueado');
      if (response.user.emailVerified === false) {
        this.router.navigate(['/usuario/verify']);
      } else {
        this.setLocalStorage(response.user);
        /* Va al componente ingresado después del login */
        this.router.navigate(['/dashboard']);
      }
      this.loading = false;
      this.loginForm.reset();
    }, (error)=> {
      console.log(this.erroresService.error(error.code), 'Upss.');
      this.loading = false;
    })
  }

  /* Se crea datos en localStorage, revisar en Aplicattion */
  setLocalStorage(user: any) {
    const usuario: User = {
      uId: user.uid,
      email: user.email,
    }
    localStorage.setItem('user', JSON.stringify(usuario))
  }

}
