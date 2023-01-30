import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { interfaceApiService } from './InterfaceApiService';
import { Observable } from 'rxjs';


interface Response { results: interfaceApiService[] }
@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {
  

  constructor(private httpCliente: HttpClient) { }


  Buscar(): Observable<any>{

    // const headers = new HttpHeaders ({
    //   "Access-Control-Allow-Origin": "",
    // });

    //const requestOptions = {headers:headers,  method: 'GET',   redirect: 'follow'}

    return this.httpCliente.get<any>("/api/arquivo/");

  }





  BuscarPorId(id: String ){
    return this.httpCliente.get<interfaceApiService>
    (`/api/arquivo/${id}`).toPromise();
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
