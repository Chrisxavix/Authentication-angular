import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    }, { validator: this.checkPassword })
  }

  ngOnInit() {
  }

  register() {
    console.log(this.registerForm.value, 'register');  
  }

  checkPassword(group: FormGroup): any {
    const password = group.controls.password.value;
    const repeatPassword = group.controls.repeatPassword.value;
    return password === repeatPassword ? null : { notSame: true };
  }

}
