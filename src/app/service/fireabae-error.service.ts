import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FireabaeErrorService {
  constructor() {}
  codeError(code: string) {
    switch (code) {
      //correo exite
      case 'auth/email-already-in-use':
        return 'el usuario ya existe';
      //contraseña baja
      case 'auth/weak-password':
        return 'passsword debe contener mas de 6 caracteres  ';

      //correo invalido
      case 'auth/invalid-email':
        return 'Email invalido  ';
      case 'auth/wrong-password':
        return 'constraseña invalida  ';
      case 'auth/user-not-found':
        return 'usuario no existe  ';
      default:
        return 'Error desconocido';
    }
  }
}
