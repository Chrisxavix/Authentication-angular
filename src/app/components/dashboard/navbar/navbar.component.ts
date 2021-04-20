import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  logOut() {
    this.angularFireAuth.auth.signOut();
    this.router.navigate(['/usuario']);
    /* Elimina datos creados después de loguearme */
    localStorage.removeItem('user');
  }
}
