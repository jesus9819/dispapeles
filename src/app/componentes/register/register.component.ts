import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FireabaeErrorService } from 'src/app/service/fireabae-error.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registrarUsuario: FormGroup;
  loading:boolean=false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private firebaseError:FireabaeErrorService
  ) {
    this.registrarUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repetirPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  registrar() {
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repetirPassword = this.registrarUsuario.value.repetirPassword;

    if (password != repetirPassword) {
      alert('las contraseñas no coinciden');
      return;
    }

    this.loading=true;

    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.loading=false;
        alert("Registro exitoso")
        this.router.navigate(['/login'])
      })
      .catch((error) => {
        this.loading=false;
        console.log(error);
        alert(this.firebaseError.codeError(error.code));
      });
    // console.log(email, password, repetirPassword);
  }

}
