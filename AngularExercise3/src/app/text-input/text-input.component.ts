import { Output,EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  @Output() textInputEvent=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  addTextInput(){
    
    let textInput= (<HTMLInputElement>document.getElementById("text-input"));
    let textName=textInput.value.replace(/\s+/g, ' ').trim();
    if (textName==""){
      document.getElementById("msg").innerHTML="Cannot add empty string";
    }
    else{
    this.textInputEvent.emit(textInput.value);
    document.getElementById("msg").innerHTML="";
  }
  textInput.value="";
  }
}
