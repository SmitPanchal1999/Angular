import { Component , ViewChild} from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ChildComponent)
  private childComponent:ChildComponent;

  private _parentCounter: number =1;
  /* triggerCounter:number=1; */
  get parentCounter():number {
      return this._parentCounter;
  }
  set parentCounter(value: number) {
      this._parentCounter = value;
  }
  incrementParent(){
    this._parentCounter+=1;
  }
  incrementChild(){
    this.childComponent.incrementChildCounter();
  }
 /*  get triggerEvent():number{
    return this.triggerCounter;
  }
  incrementTrigger(){
    this.triggerCounter+=1;
  } */

}
