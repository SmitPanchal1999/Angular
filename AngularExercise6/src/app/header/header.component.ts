import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private productService:ProductServiceService,private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.productService.isLoggedIn=false;
    localStorage.setItem("login","false");
    console.log(this.productService.isLoggedIn);
    this.router.navigate(["/login"]);
  }
}
