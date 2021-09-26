import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-success',
  templateUrl: './registration-success.component.html',
  styleUrls: ['./registration-success.component.css']
})
export class RegistrationSuccessComponent implements OnInit {
  userDetails:any;
  constructor() { }
  
  ngOnInit(): void {
    console.log(localStorage.getItem("userDetails"));
   this.userDetails=JSON.parse( localStorage.getItem("userDetails"));
  }
  


}
