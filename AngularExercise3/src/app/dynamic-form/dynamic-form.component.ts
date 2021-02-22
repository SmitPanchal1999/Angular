import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  addTextInput(textInput:string){
   let newTextInput=document.createElement("input");
   newTextInput.setAttribute("type","text");
   newTextInput.setAttribute("placeholder",textInput);
   let newP=document.createElement("p");
   newP.innerHTML=textInput+" [ Text-Input ]"+":";
   newP.style.fontSize="20px";
   newP.style.fontWeight="500";
   let form=document.getElementById("form");
   form.append(newP);
   form.append(newTextInput);
  
  }
  addNumberInput(numberInput:string){
   let newTextInput=document.createElement("input");
   newTextInput.setAttribute("type","Number");
   newTextInput.setAttribute("placeholder",numberInput);
   let newP=document.createElement("p");
   newP.innerHTML=numberInput+" [ Number-Input ]"+":";
   newP.style.fontSize="20px";
   newP.style.fontWeight="500";
   let form=document.getElementById("form");
   form.append(newP);
   form.append(newTextInput);
  }
  addTextAreaInput(textareaInput:string){
    let newTextInput=document.createElement("TEXTAREA");
    newTextInput.setAttribute("placeholder",textareaInput);
    let newP=document.createElement("p");
    newP.innerHTML=textareaInput +" [ TextArea-Input ]"+":";
    newP.style.fontSize="20px";
    newP.style.fontWeight="500";
    let form=document.getElementById("form");
    form.append(newP);
    form.append(newTextInput);
  }
}
