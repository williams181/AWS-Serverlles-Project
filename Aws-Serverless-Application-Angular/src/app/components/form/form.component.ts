import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { AppRoutingModule} from 'src/app/app-routing.module';
import { interfaceApiService } from 'src/app/InterfaceApiService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  title = 'aws-serverless-application-angular';
  show = true 

  arquivo: interfaceApiService ={id: 0,medico :"", CRM:0 ,hospital:"",
  CNPJ: "",
  paciente: "",
  convenio: "",
  acomodacao: "",
  procedimento: "" };
 


  constructor(private api: ApiServiceService,  private router: Router){ }
  ngOnInit(){

  }
 

  Salvar(){
    this.show = false
    this.arquivo.id = this.arquivo.CRM
    if(this.arquivo.id != 0){
    
    this.api.Salvar(this.arquivo)
    .then(ApiServiceService =>  {
    console.log("adicionado!")
    this.show = true
    this.router.navigate(['/list']);
  
  })
    .catch(error => console.error(error));
    }else{
      alert("complete o cadastro");
      this.show = true
    }
  }

  Atualizar(){

    this.arquivo.id = this.arquivo.CRM
    this.api.Atualizar(this.arquivo)
    .then(ApiServiceService => console.log("atualizado!"))
    .catch(error => console.error(error));
  }

  Delete(id: number){
    this.api.Delete(id).then(res => console.log("removido com sucesso !"+res)).catch(error => console.error(error))
  }

}
