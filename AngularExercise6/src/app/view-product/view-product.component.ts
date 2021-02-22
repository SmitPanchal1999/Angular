import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  
  productid:number;
  product:any;
  constructor(private productService:ProductServiceService,private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.productid=+this.activatedRoute.snapshot.paramMap.get('productId');
    console.log(this.productid);
   this.product= this.productService.getProduct(this.productid);
  console.log(this.product);
  }

}
