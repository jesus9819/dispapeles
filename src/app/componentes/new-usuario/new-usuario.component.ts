import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataUserService } from 'src/app/service/data-user.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-new-usuario',
  templateUrl: './new-usuario.component.html',
  styleUrls: ['./new-usuario.component.scss']
})
export class NewUsuarioComponent implements OnInit {
  datuser:any;
  usuarios:any;
  tipoId:any
  constructor(private afAuth: AngularFireAuth,  private router: Router,private userService:DataUserService) { }

  ngOnInit(): void {
    this.afAuth.currentUser.then(user => {
      if(user &&user.emailVerified){
        this.datuser=user;
      }else{
        this.router.navigate(['/login']);
      }
    })
this.getTipoid();
  }
  getTipoid(){
    this.userService.getTipoId().subscribe(resp =>{
      console.log("tipoid",resp);
      this.tipoId=resp

    })
  }

}
