import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productid:number;
  product:any;
  constructor(private productService:ProductServiceService,private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.productid=+this.activatedRoute.snapshot.paramMap.get('productId');
    console.log(this.productid);
   this.product= this.productService.getProduct(this.productid);
  console.log(this.product);
  }
  editProduct(){
    const editName=<HTMLInputElement>document.getElementById("editedProductName");
    const name=editName.value.replace(/\s+/g, ' ').trim();
    if (name==""){
      alert("Can't add empty product-name");
      
    }
    else{
    this.productService.editProduct(name,this.productid);
    this.router.navigate(["../../list"], { relativeTo: this.activatedRoute });
  }
  editName.value="";
  }
}
