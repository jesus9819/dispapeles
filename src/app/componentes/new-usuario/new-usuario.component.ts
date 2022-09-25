import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataUserService } from 'src/app/service/data-user.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-usuario',
  templateUrl: './new-usuario.component.html',
  styleUrls: ['./new-usuario.component.scss'],
})
export class NewUsuarioComponent implements OnInit {
  datuser: any;
  usuarios: any;
  tipoId: any;
  user:any;
  newUsuario:FormGroup;
  ;
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
  guardarUser(){
    this.user=this.newUsuario.value;
    this.userService.createUser(this.user).subscribe(resp=>{
      console.log("data",resp);
      this.showSuccess();
      this.router.navigate(['/dashboard'])

    })
  }
  showSuccess(){

    Swal.fire({
      icon: 'success',
      title: 'Guardado',
      text: 'Usuario Creado',
      showConfirmButton: false,
      timer: 1500
    })
  }
  showError(msg:any){
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: msg,
      showConfirmButton: false,
      timer: 1500
    })
  }
}
