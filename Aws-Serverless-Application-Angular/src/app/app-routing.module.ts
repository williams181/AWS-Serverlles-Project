import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';;
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
 
  { path: 'form', component: FormComponent },
  { path: 'list', component: ListComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
