import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css']
})
export class NumberInputComponent implements OnInit {
  @Output() numberInputEvent=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  addNumberInput(){
    
    let textInput= (<HTMLInputElement>document.getElementById("number-input"));
    let textName=textInput.value.replace(/\s+/g, ' ').trim();
    if (textName==""){
      document.getElementById("msg2").innerHTML="Cannot add empty string";
    }
    else{
    this.numberInputEvent.emit(textInput.value);
    document.getElementById("msg2").innerHTML="";
  }
  textInput.value="";
  }
}
