import { Component, OnInit } from '@angular/core';

import { ApiServiceService } from './api-service.service';
import { interfaceApiService } from './InterfaceApiService';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
 
  title = 'aws-serverless-application-angular';
  

  ngOnInit(){
   
  }

  constructor(private api: ApiServiceService){}

  

}