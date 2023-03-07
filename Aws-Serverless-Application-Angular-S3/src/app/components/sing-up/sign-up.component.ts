import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { CognitoService } from 'src/app/services/cognito.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignupComponent implements OnInit {
  user!: User;
  isConfirm: boolean = false;
 
 


  constructor(private router: Router, private cognito: CognitoService,
              private snackBar: MatSnackBar,private api: ApiServiceService) { }

  ngOnInit(): void {
    this.user = {} as User;
    this.isConfirm = false;
  }

  // signUpCognito(){
  //   console.log("cadastrar")
  //   if(this.user && this.user.email && this.user.password){
  //     this.cognito.signUp(this.user)
  //     .then(() => 
  //       this.isConfirm = true
  //     )
  //     .catch((error: any) =>{
  //       this.openSnackBar(error.message, "fechar")
  //     })
  //   }
  //   else{
  //     this.openSnackBar("Use Email e senha validos!","fechar");
  //   }
  // }

  public signUpCognito(){
    console.log("cadastrar")
    if(this.user && this.user.email && this.user.password){
      this.api.Criar(this.user)
      .then(() => 
        this.isConfirm = true
      )
      .catch((error: any) =>{
        this.openSnackBar(error.message, "fechar")
      })
    }
    else{
      this.openSnackBar("Use Email e senha validos!","fechar");
    }
  }

  public confirmLogin(){
    console.log("confirmar")
    if(this.user){
    this.api.confirmar(this.user)
    .then(() =>{
      this.router.navigate(['/login'])
    }).catch((error: any)=>{
      this.openSnackBar(error.message, "fechar")
    })
  }
  else{
    this.openSnackBar("houve um error", "fechar")
  }
  }

  // public confirmLogin(){
  //   console.log("confirmar")
  //   if(this.user){
  //   this.cognito.confirmLogin(this.user)
  //   .then(() =>{
  //     this.router.navigate(['/login'])
  //   }).catch((error: any)=>{
  //     this.openSnackBar(error.message, "fechar")
  //   })
  // }
  // else{
  //   this.openSnackBar("houve um error", "fechar")
  // }
  // }

 
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }




}
