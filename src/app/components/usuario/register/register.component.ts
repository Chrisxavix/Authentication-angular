import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { validateEqualPasswords } from 'src/app/util/validateEqualPasswords';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private angularFireAuth: AngularFireAuth,
    private router: Router,
  ) {
    this.registerForm = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      repeatPassword: ['']
    }, { validator: validateEqualPasswords('password', 'repeatPassword') })
  }

  ngOnInit() {
  }

  register() {
    this.loading = true;
    const usuario = this.registerForm.get('usuario').value;
    const password = this.registerForm.get('password').value;
    this.angularFireAuth.auth.createUserWithEmailAndPassword(usuario, password).then(response => {
      console.log(response, 'creado');
      this.router.navigate(['/usuario']);
      this.loading = false;
    }, (error)=> {
      console.log(this.error(error.code), 'Upss.');
      this.loading = false;
    })
  }

  error(error: string): string {
    switch(error) {
      case 'auth/email-already-in-use':
        return 'El correo ya ha sido utilizado.';
      case 'auth/weak-password':
        return 'La clave debe de ser más de 6 caracteres.'
      default: 
        return 'Error desconocido.';
    }
  }
}
