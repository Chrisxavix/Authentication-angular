import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { validateEqualPasswords } from 'src/app/util/validateEqualPasswords';
import { ErroresService } from '../../services/errores.service';

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
    private erroresService: ErroresService,
    private toastr: ToastrService,
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
      /* Envía un correo de verificación */
      response.user.sendEmailVerification();      
      this.toastr.success('Usuario creado, se envió un correo.', 'Éxito', {
        progressBar: true,
        timeOut: 3000
      });
      this.router.navigate(['/usuario']);
      this.loading = false;
    }, (error)=> {
      this.toastr.error(this.erroresService.error(error.code), 'Error', {
        progressBar: true,
        timeOut: 2800
      });
      this.loading = false;
    })
  }
}
