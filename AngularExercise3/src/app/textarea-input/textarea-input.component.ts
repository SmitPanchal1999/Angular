import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-textarea-input',
  templateUrl: './textarea-input.component.html',
  styleUrls: ['./textarea-input.component.css']
})
export class TextareaInputComponent implements OnInit {
  @Output() textareaInputEvent=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  addTextAreaInput(){
    
    let textInput= (<HTMLInputElement>document.getElementById("textarea-input"));
    let textName=textInput.value.replace(/\s+/g, ' ').trim();
    if (textName==""){
      document.getElementById("msg3").innerHTML="Cannot add empty string";
    }
    else{
    this.textareaInputEvent.emit(textInput.value);
    document.getElementById("msg3").innerHTML="";
  }
  textInput.value="";
  }

}
