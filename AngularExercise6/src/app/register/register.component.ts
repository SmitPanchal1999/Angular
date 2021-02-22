import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private productService:ProductServiceService,private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }
  register(){

    this.productService.isLoggedIn=true;
    localStorage.setItem("login","true");
    this.router.navigate(["../products/list"], { relativeTo: this.activatedRoute });
  }
}
