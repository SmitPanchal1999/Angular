import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos=[];
  addFlag=false;
  editFlag=false;
  todo:any={};
  constructor(private todoService:TodoService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  

    
    console.log("ngonit");
    this.todoService.getTodoList()
    .subscribe((data)=>{
      
      console.log(data);
      this.todos=data;
  

})
  }
  addTodo(){
    this.addFlag=true;
  }
  editTodo(id){
    
    for (let i=0;i<this.todos.length;i++){
      if(this.todos[i].id==id){
       this.todo=this.todos[i]
        break;
      }
    }
    this.editFlag=true;
  }
  deleteTodo(id,i){
    this.todoService.deleteTodo(id);
    this.todos.splice(i,1);
  }
  addThisTodo(todo){
    
    this.todoService.addTodo(JSON.stringify(todo))
    .subscribe((data)=>{
      this.todos.push(data);
    });
    this.addFlag=false;
  }
  editThisTodo(todo){
    
    this.todoService.editTodo(JSON.stringify(todo),todo.id)
    .subscribe((data)=>{
      for (let i=0;i<this.todos.length;i++){
        if(this.todos[i].id==todo.id){
         this.todos[i]=todo;
          break;
        }
      }
    });
    this.editFlag=false;
  }
}
