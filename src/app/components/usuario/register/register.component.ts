import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateEqualPasswords } from 'src/app/util/validateEqualPasswords';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
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
    console.log(this.registerForm.value, 'register');  
  }

}
