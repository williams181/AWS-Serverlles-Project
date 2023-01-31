import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { AppRoutingModule} from 'src/app/app-routing.module';
import { interfaceApiService } from 'src/app/InterfaceApiService';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers:[ApiServiceService]
})
export class FormComponent implements OnInit{
  title = 'aws-serverless-application-angular';
  show = true 
 
  form!: FormGroup;
  submited =  false


  constructor(private api: ApiServiceService,  private router: Router, private fb: FormBuilder, private route: ActivatedRoute){ }
 
  ngOnInit(): void{
    this.route.params.subscribe(
      ((params : any) =>{
          const id = params['id']
          console.log(id)
          
          this.api.BuscarPorId(id).subscribe(res =>{
            this.Editar(res.Arquivos);
            console.log(res.Arquivos)})
     
          
      })
    )

    this.form = this.fb.group({
      id: [0],
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


  BuscarPorId(id: String){
    this.api.BuscarPorId(id)
  }

  hasError(field: string){
    return this.form.get(field)?.errors
  }
 

  Salvar(){
    this.submited =true

    console.log(this.form.value)
    if(this.form.valid){
      console.log("valido")

      this.show = false
      this.api.Salvar(this.form.value)
      .then(ApiServiceService =>  {
      console.log("adicionado!")
      this.show = true
      this.router.navigate(['/list']);
      })
      .catch(error => console.error(error));
    
    }else{
      alert("preencha todos os campos")
    }
   
    
    

   
  }

  Atualizar(){

    // this.arquivo.id = this.arquivo.CRM
    // this.api.Atualizar(this.arquivo)
    // .then(ApiServiceService => console.log("atualizado!"))
    // .catch(error => console.error(error));
  }

  Delete(id: number){
    this.api.Delete(id).then(res => console.log("removido com sucesso !"+res)).catch(error => console.error(error))
  }

}
function forEach(i: any, res: interfaceApiService) {
  throw new Error('Function not implemented.');
}

