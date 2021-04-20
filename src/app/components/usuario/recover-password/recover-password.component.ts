import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErroresService } from '../../services/errores.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

  recuperarForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private angularFireAuth: AngularFireAuth,
    private router: Router,
    private erroresService: ErroresService,
  ) {
    this.recuperarForm = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.email]],
    })
  }

  ngOnInit() {
  }

  recuperarClave() {
    const usuario = this.recuperarForm.get('usuario').value;
    /* Envía al correo */
    this.angularFireAuth.auth.sendPasswordResetEmail(usuario).then(response => {
      console.log(response, 'clave');
      this.router.navigate(['/usuario']);
      this.recuperarForm.reset();
    }, (error)=> {
      console.log(this.erroresService.error(error.code), 'Upss.');
      this.recuperarForm.reset();
    })
  }
}
