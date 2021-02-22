import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthGuard } from './auth.guard';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [{
  path:"home",canActivate:[AuthGuard],component:HomeComponent
},{
  path:"login",component:LoginComponent
},
{
  path:"register",component:RegisterComponent
},

{
  path:"products/list",canActivate:[AuthGuard],component:ProductListComponent
},

{path:"products/add",canActivate:[AuthGuard],component:AddProductComponent},
{
  path:"products/:productId",canActivate:[AuthGuard],component:ViewProductComponent
},
{
  path:"products/:productId/edit",canActivate:[AuthGuard],component:EditProductComponent
},
{
  path:"logout",component:LoginComponent
},
{
  path:"",redirectTo:"/login",pathMatch:"full"
},{
  path:"**",redirectTo:"/login",pathMatch:"full"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
