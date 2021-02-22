import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService:ProductServiceService,private activatedRoute: ActivatedRoute,private router: Router ) { }
  products=[];
  ngOnInit(): void {

    this.products=this.productService.getAllProducts;
  }
  deleteRow(index:number){
    this.productService.deleteProduct(index);
  }
  viewProduct(index:number){
    this.router.navigate(["../",this.products[index].productId], { relativeTo: this.activatedRoute });
  }
  editProduct(index:number){
    let url="../"+this.products[index].productId+"/edit";
    this.router.navigate([url], { relativeTo: this.  activatedRoute });
  }

}
