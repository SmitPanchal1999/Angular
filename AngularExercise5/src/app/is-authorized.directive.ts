import { Directive , ElementRef,Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appIsAuthorized]'
})
export class IsAuthorizedDirective implements OnInit {
  @Input('appIsAuthorized') usertokens;

  
  
  constructor(private eleRef: ElementRef) {
    
   }
   ngOnInit(){
    console.log(this.usertokens);
    if (this.usertokens.hasOwnProperty("VIEW_USERS")){
      this.eleRef.nativeElement.style.display="block";
    }
    else{
      this.eleRef.nativeElement.style.display="none";
    }
   }
   
}
