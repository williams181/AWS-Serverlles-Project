import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';

import { CognitoService } from 'src/app/services/cognito.service';
import { User } from 'src/app/models/user';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers:[ApiServiceService]
})
export class FormComponent implements OnInit{
  title = 'aws-serverless-application-angular';
  show = true 
  att = true
 
  form!: FormGroup;
  submited =  false


  constructor(private api: ApiServiceService,  private router: Router,
               private fb: FormBuilder, private route: ActivatedRoute, private cognito: CognitoService,private snackBar: MatSnackBar){ }
 
  ngOnInit(): void{

    this.getUser()
    this.route.params.subscribe(
      ((params : any) =>{
          const id = params['id']
          
          
          if(id != undefined){
            this.att =false
            this.api.BuscarPorId(id).subscribe(res =>{
            this.Editar(res.Arquivos);
            console.log(res.Arquivos)
            this.att =true })
          }
          
      })
    )

    this.form = this.fb.group({
      id: null,
      medico :['', Validators.required],
      CRM:[0, Validators.required],
      hospital:['', Validators.required],
      CNPJ: ['', Validators.required],
      paciente: ['', Validators.required],
      convenio: ['', Validators.required],
      acomodacao: ['', Validators.required],
      procedimento: ['', Validators.required]
    })
  
  }

  private getUser(){
    const user = localStorage.getItem("token")
      if(user == null){
        this.router.navigate(['/login']);
      }
  
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

  Editar(arquivo: any){
    console.log("editar", arquivo)
    this.form.patchValue({
      id: arquivo.id,
      medico: arquivo.medico,
      CRM:arquivo.CRM,
      hospital:arquivo.hospital,
      CNPJ: arquivo.CNPJ,
      paciente: arquivo.paciente,
      convenio: arquivo.convenio,
      acomodacao: arquivo.acomodacao,
      procedimento: arquivo.procedimento

    })
  }


  hasError(field: string){
    return this.form.get(field)?.errors
    
  }
 
  Validador(){
    this.submited =true
    this.show = false
    if(this.form.value.id == null){
      this.Salvar()
    }else{
      this.Atualizar()
    }
  }
 

  Salvar(){

    if(this.form.valid){
      console.log("valido")
      console.log(this.form.value)
      this.api.Salvar(this.form.value)
      .then(ApiServiceService =>  {
      console.log("adicionado!")
      this.openSnackBar("Salvo com secesso","fechar")
      this.router.navigate(['/list']);
      })
      .catch(error => console.error(error));
    
    }else{
      console.log("invalido")
      this.show = true
    }
  }


  Atualizar(){
    
    if(this.form.valid){
      console.log(this.form.value)
      this.api.Atualizar(this.form.value)
      .then(ApiServiceService => {
        console.log("atualizado!")
        this.openSnackBar("Editado com secesso","fechar")
        this.router.navigate(['/list']);
      })
      .catch(error => console.error(error));
    }else{
      this.show = true
      console.log("invalido")
    }
  }



  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}


