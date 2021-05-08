import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErroresService {

  constructor() { }

  error(error: string): string {
    switch(error) {
      case 'auth/email-already-in-use':
        return 'El correo ya ha sido utilizado.';
      case 'auth/weak-password':
        return 'La clave debe de ser más de 6 caracteres.'
      case 'auth/user-not-found':
        return 'Usuario no encontrado.';
      case 'auth/wrong-password':
        return 'La clave es inválida.';
      case 'auth/invalid-email':
        return 'Ingrese un e-mail válido.';
      case 'auth/argument-error':
        return 'Ingrese un e-mail válido.';
      default: 
        return 'Error desconocido.';
    }
  }

}
