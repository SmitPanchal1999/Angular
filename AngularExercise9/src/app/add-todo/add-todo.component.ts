import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
@Output() addTodoInList: EventEmitter<any>=new EventEmitter();
  constructor(private todoService:TodoService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }
  AddThisTodo(){
    let userid=<HTMLInputElement>document.getElementById("addUserId");
    let title=<HTMLInputElement>document.getElementById("addTitle");
    let titleVal=title.value.replace(/\s+/g, ' ').trim();
    let completed=<HTMLInputElement>document.getElementById("addCompleted");
    if (userid.value=="" || userid.value==""){
      alert("Please provide userId");
    }
    else if (titleVal==""){
      alert("Please provide title");
    }
    else {
      let todoObj={
        userId:userid.value,
        title:titleVal,
        completed:completed.checked
      }
      this.addTodoInList.emit(todoObj);
    }
  }

}
