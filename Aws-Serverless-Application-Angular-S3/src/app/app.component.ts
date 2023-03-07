import { Component, OnInit } from '@angular/core';

import { ApiServiceService } from './services/api-service.service';
import { interfaceApiService } from './models/InterfaceApiService';
import {Observable, of} from 'rxjs';
import { Router } from '@angular/router';
import { CognitoService } from './services/cognito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
 
  title = 'aws-serverless-application-angular';
  

  ngOnInit(){
   
  }

  constructor(private api: ApiServiceService,  private router: Router, private cognito: CognitoService){}

  

}