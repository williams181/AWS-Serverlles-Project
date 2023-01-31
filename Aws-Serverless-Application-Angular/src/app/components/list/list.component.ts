import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { interfaceApiService } from 'src/app/InterfaceApiService';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  show: boolean = false;
  hiddenDelete: boolean = true;
  hiddenEdit: boolean = true;
  public Registro$!: Observable<any>;

  




 ngOnInit(){
   this.Registro$ =  this.api.Buscar();
   this.Registro$.subscribe(res=> {console.log(res.Registros)
    
    this.show = true;
  });
   
  
 }

 constructor(private api: ApiServiceService, private router: Router,private route: ActivatedRoute){}


 BuscarPorId(id: String){
  this.hiddenEdit = false;
  this.router.navigate(['edit/',id])
  console.log('editar') 
 
}

 Delete(id: number){
   this.hiddenDelete = false;
   this.api.Delete(id).then(res =>{
     console.log("removido com sucesso !"+res)
     this.hiddenDelete = true;
     this.Registro$ =  this.api.Buscar();
    }).catch(error => console.error(error))
   
 }


}
