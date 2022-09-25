import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataUserService } from 'src/app/service/data-user.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-usuario',
  templateUrl: './new-usuario.component.html',
  styleUrls: ['./new-usuario.component.scss'],
})
export class NewUsuarioComponent implements OnInit {
  datuser: any;
  usuarios: any;
  tipoId: any;
  newUsuario:any;
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private userService: DataUserService,
    private fb: FormBuilder
  ) {
    this.newUsuario=this.fb.group({
      tipoId:['',Validators.required],
      identificacion:['',Validators.required],
      nombre:['',Validators.required],
      apellidos:['',Validators.required],
      edad:['',Validators.required],
      telefono:['',Validators.required],
      direccion:['',Validators.required],


    })
  }

  ngOnInit(): void {
    this.afAuth.currentUser.then((user) => {
      if (user && user.emailVerified) {
        this.datuser = user;
      } else {
        this.router.navigate(['/login']);
      }
    });
    this.getTipoid();
  }
  getTipoid() {
    this.userService.getTipoId().subscribe((resp) => {
      console.log('tipoid', resp);
      this.tipoId = resp;
    });
  }
}
