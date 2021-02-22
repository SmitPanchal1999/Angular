import { Component, OnInit,Input ,Output, EventEmitter,OnChanges,SimpleChange,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
 /*  @Input() parent:number; */
  @Output() childEvent=new EventEmitter<number>();
  childCounter:number=1;
  constructor() { }
  /* ngOnChanges(changes:SimpleChanges){
    this.incrementChild();

  } */
  ngOnInit(): void {

  }
  incrementParent(){
    this.childEvent.emit();
  }
  incrementChildCounter(){
    this.childCounter+=1;
  }

}
