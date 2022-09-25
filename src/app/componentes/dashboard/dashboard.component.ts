import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DataUserService } from 'src/app/service/data-user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
datuser:any;
usuarios:any;
  constructor(private afAuth: AngularFireAuth,  private router: Router,private userService:DataUserService) { }

  ngOnInit(): void {
    this.afAuth.currentUser.then(user => {
      if(user &&user.emailVerified){
        this.datuser=user;
      }else{
        this.router.navigate(['/login']);
      }
    })
    this.getAlluser();
  }

  logOut(){
    this.afAuth.signOut().then(()=> this.router.navigate(['/login']))
  }
   getAlluser(){
    this.userService.getUsuarios().subscribe(resp =>{
      console.log("usuarios",resp);
      this.usuarios=resp


    })
   }
   deleteUsuario( id:number){
    this.userService.deleteUsurarios(id).subscribe((resp) =>{
      console.log(resp.data);
      this.getAlluser();
      if (resp == 200) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Inactivado',
          showConfirmButton: false,
          timer: 3000,
        });
      }

    })
   }
}
