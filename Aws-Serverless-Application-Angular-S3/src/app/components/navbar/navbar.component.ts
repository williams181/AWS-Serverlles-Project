import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoService } from 'src/app/services/cognito.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  constructor(private cognito: CognitoService, private router: Router) { }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  signOut(){
    localStorage.removeItem("token")
    this.router.navigate(['/login']);
  }

  // signOut(){
  //   this.cognito.signOut()
  //   .then(()=>{
  //     this.router.navigate(['/login']);
  //   })
  // }

}
