import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RegistrationSuccessComponent } from './registration-success/registration-success.component';

const routes: Routes = [{
  path:"register",component:ReactiveFormComponent
},
{
  path:"registration-success",component:RegistrationSuccessComponent
},
{
  path:"**",redirectTo:"register",pathMatch:"full"
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
