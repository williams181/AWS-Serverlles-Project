import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import { ApiServiceService } from 'src/app/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  show: boolean = false;

 public Registro$!: Observable<any>;

 ngOnInit(){
   this.Registro$ =  this.api.Buscar();
   this.Registro$.subscribe(res=> {console.log(res)
    
    this.show = true;
  });
   
  
 }

 constructor(private api: ApiServiceService, private router: Router){}


 BuscarPorId(id: String){
  this.api.BuscarPorId(id)
  .then(ApiServiceService => {
    console.log(ApiServiceService)
    this.router.navigate(['/form'])
  })
  .catch(error => console.error(error))
}

 Delete(id: number){
   this.api.Delete(id).then(res => console.log("removido com sucesso !"+res)).catch(error => console.error(error))
 }


}
