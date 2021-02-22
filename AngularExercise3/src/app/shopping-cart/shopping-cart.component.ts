import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  itemsArray: { itemName: string; quantity: number }[] = [{ itemName: "hello", quantity: 1 }];
  constructor() { }

  ngOnInit(): void {
  }
  addItem() {
    let userInput = (<HTMLInputElement>document.getElementById("userInputItem"));
    let input=userInput.value.replace(/\s+/g, ' ').trim();
    if(input==""){
      document.getElementById("userInputMsg").innerHTML="Cannot add empty string";
      
    }
    else{

    
    this.itemsArray.push({ itemName: userInput.value, quantity: 1 });
    document.getElementById("userInputMsg").innerHTML="";
    
    }
    userInput.value="";
  }
  incrementQty(index) {
    this.itemsArray[index].quantity += 1;
  }
  decrementQty(index) {
    if (this.itemsArray[index].quantity != 1) {


      this.itemsArray[index].quantity -= 1;
    }

  }
  deleteRow(index) {
    this.itemsArray.splice(index,1);
  }
}
