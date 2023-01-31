import { EventEmitter, Injectable, Output } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { interfaceApiService } from './InterfaceApiService';
import { Observable, take } from 'rxjs';
import { FormComponent} from 'src/app/components/form/form.component';
import { Router } from '@angular/router';


interface Response { results: interfaceApiService[] }
@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {
   ngModel =  new EventEmitter<interfaceApiService>();
   static arquivo =  new EventEmitter<interfaceApiService>();
 
  

  constructor(private httpCliente: HttpClient, private router: Router) { }



  Buscar(): Observable<any>{

    return this.httpCliente.get<any>("/api/arquivo/");

  }


  BuscarPorId(id: any ){

  return this.httpCliente.get<any>(`/api/arquivo/${id}`);
   
   
  }

  Salvar(arquivo: interfaceApiService){
    return this.httpCliente.post<interfaceApiService>(`/api/cadastro`,arquivo).toPromise();
    
  }

  Atualizar(arquivo: interfaceApiService){
    return this.httpCliente.put<interfaceApiService>(`/api/atualizar`,arquivo).toPromise();
  }

  Delete(id: number){
    return this.httpCliente.delete(`/api/delete/${id}`).toPromise()
  }

}
