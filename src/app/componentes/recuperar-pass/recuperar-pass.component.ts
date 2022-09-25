import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FireabaeErrorService } from 'src/app/service/fireabae-error.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-recuperar-pass',
  templateUrl: './recuperar-pass.component.html',
  styleUrls: ['./recuperar-pass.component.scss']
})
export class RecuperarPassComponent implements OnInit {
recuperarUsuario:FormGroup;
loading:boolean=false;
  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private firebaseError:FireabaeErrorService
  ) {
    this.recuperarUsuario=this.fb.group({
      correo:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
  recuperar(){
    const correo=this.recuperarUsuario.value.correo;
    this.loading=true;
    this.afAuth.sendPasswordResetEmail(correo).then(()=>{
      alert("se envio un correo para recuperar la password")
      this.router.navigate(['/login']);
    }).catch((error)=>{
      this.loading=false;
      alert(this.firebaseError.codeError(error.code));
    })
  }

}
