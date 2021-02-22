import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fontsize="30px";
  userTokens={
    "VIEW_PRODUCTS":1,"VIEW_CATEGORIES":1
   
  };
  
  userTokensArray:string[]=Object.keys(this.userTokens);
  
}
