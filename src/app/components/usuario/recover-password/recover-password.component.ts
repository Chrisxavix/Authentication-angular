import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

  recuperarForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.recuperarForm = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.email]],
    })
  }

  ngOnInit() {
  }

  recuperarClave() {
    console.log(this.recuperarForm.value, 'recuperar');
  }
}
