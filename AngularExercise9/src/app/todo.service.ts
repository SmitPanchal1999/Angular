import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
  apiUrl="https://jsonplaceholder.typicode.com/todos";
  constructor(private http: HttpClient) { }
  getTodoList() {
    console.log("hk");
  return this.http.get<Todo[]>(this.apiUrl);
  }
  addTodo(todo){
  return this.http.post<Todo>(this.apiUrl,todo,this.httpOptions)
 
  }
  editTodo(todo,id){
  return  this.http.put<Todo>(this.apiUrl+"/"+id,todo,this.httpOptions)
  
 
  }
  deleteTodo(id){
    return this.http.delete<Todo>(this.apiUrl+"/"+id,this.httpOptions)

  }
  
    

  
}
