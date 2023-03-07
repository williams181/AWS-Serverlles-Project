import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';;
import { ListComponent } from './components/list/list.component';
import { SignupComponent } from './components/sing-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';



const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'form', component: FormComponent },
  { path: 'list', component: ListComponent },
  { path: 'edit/:id', component: FormComponent },
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
