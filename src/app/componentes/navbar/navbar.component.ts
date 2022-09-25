import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth,  private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.afAuth.signOut().then(()=> this.router.navigate(['/login']))
  }
}
