import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  id;
  
@Output() editTodoInList: EventEmitter<any>=new EventEmitter();
  @Input() todo;
  constructor(private todoService:TodoService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=+this.activatedRoute.snapshot.paramMap.get('id');
    
    let userid=<HTMLInputElement>document.getElementById("addUserId");
    let title=<HTMLInputElement>document.getElementById("addTitle");
    let completed=<HTMLInputElement>document.getElementById("addCompleted");
    userid.value=this.todo.userId;
    title.value=this.todo.title;
    completed.checked=this.todo.completed;
  }
  editThisTodo(){
    
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
        completed:completed.checked,
        id:this.todo.id
      }
      this.editTodoInList.emit(todoObj);
    }
  }
}
