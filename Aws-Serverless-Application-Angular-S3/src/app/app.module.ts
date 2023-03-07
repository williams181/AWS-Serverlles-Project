import { NgModule, LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent  } from './components/sing-up/sign-up.component';

import { MatSnackBarModule,} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


registerLocaleData(localePt, 'pt');

@NgModule({
  
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    
    
  
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
   
    
    MatSnackBarModule,


  ],
 
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
