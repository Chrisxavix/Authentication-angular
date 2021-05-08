import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private toastr: ToastrService,
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
      this.toastr.success('Se envío un enlace a su correo.', 'Éxito', {
        progressBar: true,
        timeOut: 3000
      });
      this.recuperarForm.reset();
    }, (error)=> {
      this.toastr.error(this.erroresService.error(error.code), 'Error', {
        progressBar: true,
        timeOut: 2800
      });
    })
  }
}
