import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private productService:ProductServiceService,private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    this.productService.isLoggedIn=true;
    localStorage.setItem("login","true");
    console.log(this.productService.isLoggedIn);
    this.router.navigate(["../products/list"], { relativeTo: this.activatedRoute });
  }
}
