import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registrarUsuario: FormGroup;


  constructor(private fb: FormBuilder) {
    this.registrarUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repetirPassword:  ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  registrar() {
    const email= this.registrarUsuario.value.email;
    const password=this.registrarUsuario.value.password;
    const repetirPassword=this.registrarUsuario.value.repetirPassword;

    console.log(email,password,repetirPassword);
  }
}
