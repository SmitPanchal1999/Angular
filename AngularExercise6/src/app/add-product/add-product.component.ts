import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import {NavigationExtras} from "@angular/router";
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService:ProductServiceService,private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {

  }
  addNewProduct(){
    let productname=<HTMLInputElement>document.getElementById("addProductName");
    let name=productname.value.replace(/\s+/g, ' ').trim();
    if (name==""){
      alert("Can't add empty product-name");
      
    }
    else{
    this.productService.addNewProduct(name);
    this.router.navigate(["../list"], { relativeTo: this.activatedRoute });
  }
  productname.value="";
  }
}
