import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TdFormComponent } from './td-form/td-form.component';

const routes: Routes = [
  {
    path:"login",component:TdFormComponent
  },
  {
    path:"home",component:HomeComponent
  }
  ,{
    path:"**",redirectTo:"login",pathMatch:"full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
