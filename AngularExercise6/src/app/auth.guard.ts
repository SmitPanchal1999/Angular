import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductServiceService } from './product-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate ,CanActivateChild{
  constructor(private productService:ProductServiceService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     console.log(localStorage.getItem("login"))
     if (localStorage.getItem("login")=="true"){
      return true;
     }
    return false;
  }
  canActivateChild() {
    console.log('checking child route access');
    return this.productService.isLoggedIn;
  }
}
