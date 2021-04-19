import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  error = false;
  pin = '';
  constructor() { }

  ngOnInit() {
  }

  ingresar() {
    if (this.pin === '') {
      this.error = true;
      setTimeout(()=> {
        this.error = false;
      }, 3000)
    } else {
      console.log(this.pin, 'correct');
    }
  }
}
