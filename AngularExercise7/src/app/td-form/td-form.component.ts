import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {
emailVar;
passwordVar;
  constructor(private activatedRoute:ActivatedRoute , private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if (this.emailVar=="test@gmail.com" && this.passwordVar=="test@123"){
        this.router.navigate(["../home"],{relativeTo:this.activatedRoute});
    }
    else{
      alert("Invalid email and password");
    }
}
}
