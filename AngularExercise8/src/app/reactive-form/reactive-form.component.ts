import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup,FormControl} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  states:string[]=["Gujarat","Tamil Nadu","Madhya Pradesh","Rajasthan","Punjab","Goa"];
  countries:string[]=["India", "America","Canada"];
  constructor(private fb:FormBuilder,private activatedRouter:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }
  get userName(){
    return this.registrationForm.get("userName");
  }
  get firstName(){
    return this.registrationForm.get("firstName");
  }
  get lastName(){
    return this.registrationForm.get("lastName");
  }
  get gender(){
    return this.registrationForm.get("gender");
  }
  get streetAddress(){
    return this.registrationForm.get("address.streetAddress");
  }
  get city(){
    return this.registrationForm.get("address.city");
  }
  get country(){
    return this.registrationForm.get("address.country");
  }
  get state(){
    return this.registrationForm.get("address.state");
  }
  registrationForm=this.fb.group({
    userName:["",[Validators.required,Validators.minLength(5),Validators.maxLength(100)]],
    firstName:["",[Validators.required,Validators.minLength(5),Validators.maxLength(100)]],
    
    lastName:["",[Validators.required,Validators.minLength(5),Validators.maxLength(100)]],
    gender:["",[Validators.required]],
    student:[false],
    address:this.fb.group({
      city:["",[Validators.required,Validators.maxLength(300)]],
      state:["",[Validators.required]],
      streetAddress:["",[Validators.required,Validators.maxLength(1000)]],
      country:["",[Validators.required]]
    })
  })
  onSubmit(){
    console.log(this.registrationForm.value);
    localStorage.setItem("userDetails",JSON.stringify(this.registrationForm.value));
    this.router.navigate(["../registration-success"],{relativeTo:this.activatedRouter});
  }

}
