import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  isLoggedIn:boolean=false;
  products:{productId:number;productName:string}[]=[];
  productIds={};
  id:number=0;
  constructor() {
    
   }
   get getAllProducts(){
      return this.products;
   }
   addNewProduct(productName:string){
      this.products.push({productId:this.id,productName:productName});
      this.productIds[this.id]=1;
      this.id+=1;
      console.log(this.products,this.productIds);
   }
   deleteProduct(index:number){
        delete this.productIds[index];
        this.products.splice(index,1);
      console.log(this.products,this.productIds);
       
   }
   editProduct(productName:string,productId:number){
    if (this.productIds.hasOwnProperty(productId)){
    for(let i=0;i<this.products.length;i++){
      if (this.products[i].productId==productId){
        this.products[i].productName=productName;
        return true;
      }
    }
  }
  else{
    return false
  }

   }
   getProduct(productId:number){
    for(let i=0;i<this.products.length;i++){
      if (this.products[i].productId==productId){
        
        return this.products[i];
      }
    }
    return undefined;
   }
   
}
